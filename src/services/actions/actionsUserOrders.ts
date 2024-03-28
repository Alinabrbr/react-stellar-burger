import { createAction } from "@reduxjs/toolkit";
import { TOrders, wsConnect } from "../../utils/types/types";

export const wsConnectUserOrders = createAction<wsConnect>("WS_CONNECT_ORDER");
export const wsDisconnectUserOrders = createAction("WS_DISCONNECT_ORDER");
export const wsConnectingUserOrders = createAction("WS_CONNECTING_ORDER");
export const wsOpenUserOrders = createAction("WS_OPEN_ORDER");
export const wsCloseUserOrders = createAction("WS_CLOSE_ORDER");
export const wsMessageUserOrders = createAction<TOrders>("WS_MESSAGE_ORDER");
export const wsErrorUserOrders = createAction<string | undefined>("WS_ERROR_ORDER");