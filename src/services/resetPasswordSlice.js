import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postResetPasswordRequest} from "../utils/auth";

const initialState = {
    isLoading: false,
    error: "",
    success: false
};

export const fetchResetPasswordResult = createAsyncThunk(
    `password/fetchResetPasswordResult`,
    async (password, token) => {
        return await postResetPasswordRequest(password, token).then((data) => data);
    }
);

const resetPassword = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.success = "";
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchResetPasswordResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchResetPasswordResult.fulfilled.type, (state, action) => {
                state.success = action.payload.success;
                state.isLoading = false;
            })
            .addCase(fetchResetPasswordResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default resetPassword.reducer;
export const {clearSuccess} = resetPassword.actions;

