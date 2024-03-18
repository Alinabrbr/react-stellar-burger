import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {postForgotPasswordRequest} from "../utils/auth";
import {TMessageResponse} from "../utils/types/types";


type TInitialState = {
    isLoading: boolean;
    error: SerializedError | null;
    success: boolean;
}

const initialState: TInitialState = {
    isLoading: false,
    error: null,
    success: false
};

export const fetchForgotPasswordResult = createAsyncThunk(
    `password/fetchForgotPasswordResult`,
    postForgotPasswordRequest
);



const forgotPassword = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {
        clearSuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchForgotPasswordResult.pending.type, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchForgotPasswordResult.fulfilled.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.success = action.payload.success;
                state.isLoading = false;
            })
            .addCase(fetchForgotPasswordResult.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.error = action.payload.message ? Error(action.payload.message) : null;
                state.isLoading = false;
            })
    }
})

export default forgotPassword.reducer;
export const {clearSuccess} = forgotPassword.actions;