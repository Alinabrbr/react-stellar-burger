import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {postResetPasswordRequest} from "../../utils/auth";
import {TMessageResponse} from "../../utils/types/types";

type TInitialState = {
    isLoading: boolean;
    error: SerializedError | null,
    success: boolean;
}

const initialState: TInitialState = {
    isLoading: false,
    error: null,
    success: false
};

export const fetchResetPasswordResult = createAsyncThunk(
    `password/fetchResetPasswordResult`,
    postResetPasswordRequest
);

const resetPassword = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchResetPasswordResult.pending.type, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchResetPasswordResult.fulfilled.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.success = action.payload.success;
                state.isLoading = false;
            })
            .addCase(fetchResetPasswordResult.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.error = action.payload.message ? Error(action.payload.message) : null;
                state.isLoading = false;
            })
    }
})

export default resetPassword.reducer;

