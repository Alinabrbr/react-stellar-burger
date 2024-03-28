import {createSlice} from "@reduxjs/toolkit";
import {TOrder} from "../../utils/types/types";

type TInitialState = {
    wsConnected: boolean;
    orders: TOrder[] | [];
    total: number | null;
    totalToday: number | null;
    error?: Event;
}

export const initialState: TInitialState = {
    wsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
}

const wsSliceOrderFeed = createSlice({
    name: "wsOrders",
    initialState,
    reducers: {
        wsOpenOrderFeed: (state) => {
            state.wsConnected = true;
            state.error = undefined;
        },
        wsCloseOrderFeed: () => {
            return initialState;
        },
        wsErrorOrderFeed: (state, action) => {
            state.wsConnected = false;
            state.error = action.payload;
        },
        wsMessageOrderFeed: (state, action) => {
            state.wsConnected = true;
            state.orders = action.payload.orders;
            state.total = action.payload.total;
            state.totalToday = action.payload.totalToday;
            state.error = undefined;
        },
    },
})

export default wsSliceOrderFeed.reducer;
export const {wsOpenOrderFeed, wsCloseOrderFeed, wsErrorOrderFeed, wsMessageOrderFeed} = wsSliceOrderFeed.actions;