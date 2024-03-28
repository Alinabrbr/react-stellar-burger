import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./reducers/cardsSlice";
import popupInfoReducer from "./reducers/ingredientsInfoSlice";
import popupOrderReducer from "./reducers/orderSlice";
import burgerConstructorReducer from "./reducers/constructorSlice";
import orderDetailsReducer from "./reducers/orderDetailsSlice";
import registerReducer from "./reducers/registerAndAuthorizationSlice";
import forgotPasswordReducer from "./reducers/forgotPasswordSlice";
import resetPasswordReducer from "./reducers/resetPasswordSlice";
import profileInfoReducer from "./reducers/getInfoProfileSlice";
import {socketMiddleware} from "./middleware/socket-middleware";
import wsSliceOrderFeed, {wsCloseOrderFeed, wsErrorOrderFeed, wsOpenOrderFeed, wsMessageOrderFeed} from "./reducers/wsOrderFeedSlice";
import wsSliceUserOrders, {wsCloseUserOrders, wsErrorUserOrders, wsOpenUserOrders, wsMessageUserOrders} from "./reducers/wsUserOrdersSlice";
import {urlApi} from "../utils/api";
import {
    wsConnectingOrderFeed,
    wsConnectOrderFeed,
    wsDisconnectOrderFeed,
} from "./actions/actionsFeed";
import {
    wsConnectUserOrders,
    wsDisconnectUserOrders,
    wsConnectingUserOrders,
} from "./actions/actionsUserOrders";

const wsActionOrderFeed = {
    wsConnect: wsConnectOrderFeed,
    wsDisconnect: wsDisconnectOrderFeed,
    wsConnecting: wsConnectingOrderFeed,
    wsOpen: wsOpenOrderFeed,
    wsClose: wsCloseOrderFeed,
    wsMessage: wsMessageOrderFeed,
    wsError: wsErrorOrderFeed,
};

const wsActionUserOrders = {
    wsConnect: wsConnectUserOrders,
    wsDisconnect: wsDisconnectUserOrders,
    wsConnecting: wsConnectingUserOrders,
    wsOpen: wsOpenUserOrders,
    wsClose: wsCloseUserOrders,
    wsMessage: wsMessageUserOrders,
    wsError: wsErrorUserOrders,
};

const ordersMiddleware  = socketMiddleware(wsActionOrderFeed);
const userOrdersMiddleware = socketMiddleware(wsActionUserOrders);

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        popupInfo: popupInfoReducer,
        popupOrder: popupOrderReducer,
        burgerConstructor: burgerConstructorReducer,
        orderDetails: orderDetailsReducer,
        accessToken: registerReducer,
        successForgotPassword: forgotPasswordReducer,
        successResetPassword: resetPasswordReducer,
        profileInfo: profileInfoReducer,
        wsOrders: wsSliceOrderFeed,
        wsUserOrders: wsSliceUserOrders,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: urlApi,
            },
        }).concat(ordersMiddleware, userOrdersMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;