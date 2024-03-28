import {createSlice} from "@reduxjs/toolkit";
import {TOrder} from "../../utils/types/types";

type TInitialState = {
    wsConnected: boolean;
    orders: TOrder[];
    error?: Event;
}

export const initialState: TInitialState = {
    wsConnected: false,
    orders: [],
}

const wsSliceUserOrders = createSlice({
    name: "wsUserOrders",
    initialState,
    reducers: {
        wsOpenUserOrders: (state) => {
            state.wsConnected = true;
            state.error = undefined;
        },
        wsCloseUserOrders: () => {
            return initialState;
        },
        wsErrorUserOrders: (state, action) => {
            state.wsConnected = false;
            state.error = action.payload;
        },
        wsMessageUserOrders: (state, action) => {
            state.wsConnected = true;
            state.orders = action.payload.orders;
            state.error = undefined;
        },
    },
})

export default wsSliceUserOrders.reducer;
export const {wsOpenUserOrders, wsCloseUserOrders, wsErrorUserOrders, wsMessageUserOrders} = wsSliceUserOrders.actions;