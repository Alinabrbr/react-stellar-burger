import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {postOrderRequest} from "../utils/api";

const initialState = {
    order: null,
    loading: true,
    error: null
};

export const fetchOrderResult = createAsyncThunk(
    `orderDetails/fetchOrderResult`,
    async ({ingredients, token}) => {
        return await postOrderRequest({ingredients, token});
    }
);

export const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchOrderResult.pending, state => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchOrderResult.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload;
                state.error = null;
            })

            .addCase(fetchOrderResult.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.order = null;
            });
    }
});

export default orderDetailsSlice.reducer;