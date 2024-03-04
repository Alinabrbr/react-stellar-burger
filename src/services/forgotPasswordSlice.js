import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postForgotPasswordRequest} from "../utils/auth";

const initialState = {
    isLoading: false,
    error: "",
    success: false
};

export const fetchForgotPasswordResult = createAsyncThunk(
    `password/fetchForgotPasswordResult`,
    async (email) => {
        return await postForgotPasswordRequest(email).then((data) => data);
    }
);

const forgotPassword = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {
        clearSuccess: (state) => {
            state.success = '';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchForgotPasswordResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchForgotPasswordResult.fulfilled.type, (state, action) => {
                state.success = action.payload.success;
                state.isLoading = false;
            })
            .addCase(fetchForgotPasswordResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default forgotPassword.reducer;
export const {clearSuccess} = forgotPassword.actions;