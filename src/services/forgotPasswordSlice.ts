import {createAsyncThunk, createSlice, SerializedError} from "@reduxjs/toolkit";
import {postForgotPasswordRequest} from "../utils/auth";


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

// export const fetchForgotPasswordResult = createAsyncThunk(
//     `password/fetchForgotPasswordResult`,
//     async (email) => {
//         return await postForgotPasswordRequest(email).then((data) => data);
//     }
// );

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
            .addCase(fetchForgotPasswordResult.fulfilled.type, (state, action: any) => {
                state.success = action.payload.success;
                state.isLoading = false;
            })
            .addCase(fetchForgotPasswordResult.rejected.type, (state, action: any) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default forgotPassword.reducer;
export const {clearSuccess} = forgotPassword.actions;