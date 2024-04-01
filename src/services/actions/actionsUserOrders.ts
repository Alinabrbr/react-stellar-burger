import { createAction } from "@reduxjs/toolkit";
import {wsConnect } from "../../utils/types/types";

export const wsConnectUserOrders = createAction<wsConnect>("WS_CONNECT_ORDER");
export const wsDisconnectUserOrders = createAction("WS_DISCONNECT_ORDER");
export const wsConnectingUserOrders = createAction("WS_CONNECTING_ORDER");