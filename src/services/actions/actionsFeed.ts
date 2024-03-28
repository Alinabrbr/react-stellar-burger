import { createAction } from "@reduxjs/toolkit";
import { TOrders, wsConnect } from "../../utils/types/types";

export const wsConnectOrderFeed = createAction<wsConnect>("WS_CONNECT_FEED");
export const wsDisconnectOrderFeed = createAction("WS_DISCONNECT_FEED");
export const wsConnectingOrderFeed = createAction("WS_CONNECTING_FEED");
export const wsOpenOrderFeed = createAction("WS_OPEN_FEED");
export const wsCloseOrderFeed = createAction("WS_CLOSE_FEED");
export const wsMessageOrderFeed = createAction<TOrders>("WS_MESSAGE_FEED");
export const wsErrorOrderFeed = createAction<string | undefined>("WS_ERROR_FEED");