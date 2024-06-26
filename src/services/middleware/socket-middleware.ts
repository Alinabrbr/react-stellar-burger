import {
    ActionCreatorWithOptionalPayload,
    ActionCreatorWithPayload,
    ActionCreatorWithoutPayload,
    Middleware,
} from "@reduxjs/toolkit";
import {refreshToken} from "../../utils/api";
import { TOrders, RefreshResponseWithTokenType, wsConnect } from "../../utils/types/types";

type TWsActions = {
    wsConnect: ActionCreatorWithPayload<wsConnect>;
    wsDisconnect: ActionCreatorWithoutPayload;
    wsConnecting: ActionCreatorWithoutPayload;
    wsOpen: ActionCreatorWithoutPayload;
    wsClose: ActionCreatorWithoutPayload;
    wsError: ActionCreatorWithOptionalPayload<string | undefined>;
    wsMessage: ActionCreatorWithPayload<TOrders>;
};

export const socketMiddleware = (wsActions: TWsActions): Middleware => {
    return store => {
        let socket: WebSocket | null = null;
        let reconnectTimeout: number = 0;
        let isConnected: boolean = false;
        let wsUrl: string = "";
        let withTokenRefresh: boolean = false;
        return next => action => {
            const { dispatch } = store;
            const { wsConnect, wsDisconnect, wsConnecting, wsOpen, wsClose, wsError, wsMessage } = wsActions;

            if (wsConnect.match(action)) {
                console.log('connect')
                wsUrl = action.payload.wsUrl;
                withTokenRefresh = action.payload.withTokenRefresh;
                socket = new WebSocket(wsUrl);
                isConnected = true;
                dispatch(wsConnecting());
            }
            if (socket) {
                socket.onopen = event => {
                    console.log("socket.onopen", event);
                    dispatch(wsOpen());
                };
                socket.onerror = event => {
                    console.log("socket.onerror", event);
                };
                socket.onclose = event => {
                    if (event.code !== 1000) {
                        console.log("socket.onclose error", event);
                        dispatch(wsError(event.code.toString()));
                    }
                    if (isConnected && event.code !== 1000) {
                        reconnectTimeout = window.setTimeout(() => {
                            dispatch(wsConnect({ wsUrl, withTokenRefresh }));
                        }, 3000);
                    }
                };
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    if (withTokenRefresh && parsedData.message === "Invalid or missing token") {
                        refreshToken()
                            .then((refreshData: any) => {
                                const typedRefreshData = refreshData as RefreshResponseWithTokenType;
                                console.log("refreshData", typedRefreshData);
                                localStorage.setItem("accessToken", typedRefreshData.accessToken);
                                localStorage.setItem("refreshToken", typedRefreshData.refreshToken);
                                const newWsUrl = new URL(wsUrl);
                                newWsUrl.searchParams.set(
                                    "token",
                                    typedRefreshData.accessToken.replace("Bearer ", "")
                                );
                                dispatch(wsConnect({ wsUrl: newWsUrl.href.toString(), withTokenRefresh }));
                            })
                            .catch((err: any) => {
                                dispatch(wsError(err.message.toString()));
                            });
                    }
                    dispatch(wsMessage(parsedData));
                };
            }
            if (wsDisconnect.match(action) && socket) {
                console.log('disconnect')
                clearTimeout(reconnectTimeout);
                isConnected = false;
                reconnectTimeout = 0;
                socket.close(1000, "Работа закончена");
                dispatch(wsClose());
            }
            next(action);
        };
    };
};