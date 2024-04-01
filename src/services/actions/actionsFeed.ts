import { createAction } from "@reduxjs/toolkit";
import {wsConnect } from "../../utils/types/types";

export const wsConnectOrderFeed = createAction<wsConnect>("WS_CONNECT_FEED");
export const wsDisconnectOrderFeed = createAction("WS_DISCONNECT_FEED");
export const wsConnectingOrderFeed = createAction("WS_CONNECTING_FEED");