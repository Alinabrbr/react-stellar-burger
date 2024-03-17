import {createAsyncThunk, createSlice, SerializedError} from "@reduxjs/toolkit";
import {postResetPasswordRequest} from "../utils/auth";

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
            .addCase(fetchResetPasswordResult.fulfilled.type, (state, action: any) => {
                state.success = action.payload.success;
                state.isLoading = false;
            })
            .addCase(fetchResetPasswordResult.rejected.type, (state, action: any) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default resetPassword.reducer;
// export const {clearSuccess} = resetPassword.actions;

