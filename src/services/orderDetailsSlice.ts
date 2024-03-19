import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import {postOrderRequest} from "../utils/api";

type TInitialState = {
    order: any;
    loading: boolean;
    error: SerializedError | null
}

const initialState: TInitialState = {
    order: null,
    loading: true,
    error: null
};

export const fetchOrderResult = createAsyncThunk(
    `orderDetails/fetchOrderResult`,
    postOrderRequest
);

export const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOrderResult.pending, (state: TInitialState) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchOrderResult.fulfilled, (state: TInitialState, action) => {
                state.loading = false;
                state.order = action.payload;
                state.error = null;
            })

            .addCase(fetchOrderResult.rejected, (state: TInitialState, action) => {
                state.loading = false;
                state.error = Error(action.error.message);
                state.order = null;
            });
    }
});

export default orderDetailsSlice.reducer;