import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {postLoginRequest, postRegisterProfileRequest} from "../../utils/auth";
import {getRefreshTokenRequest} from "../../utils/token";
import {postLogoutRequest} from "../../utils/logout";
import {AuthResponse, TMessageResponse, UserResponseToken} from "../../utils/types/types";

type TInitialState = {
    isLoading: boolean,
    error: SerializedError | null;
    success: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    message: string | null;
}

export const initialState: TInitialState = {
    isLoading: false,
    error: null,
    success: false,
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    message: ""
};

export const fetchRegisterProfileResult = createAsyncThunk(
    `register/fetchAccessTokenResult`,
    postRegisterProfileRequest
);

export const fetchLoginResult = createAsyncThunk(
    `login/fetchAccessTokenResult`,
  postLoginRequest
);

export const fetchLogoutResult = createAsyncThunk(
    'logout',
    postLogoutRequest
);

export const fetchRefreshTokenResult = createAsyncThunk(
    `token/fetchRefreshTokenResult`,
    getRefreshTokenRequest
);

const Register = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRegisterProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRegisterProfileResult.fulfilled.type, handleLogin)
            .addCase(fetchRegisterProfileResult.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.error = action.payload.message ? Error(action.payload.message) : null;
                state.isLoading = false;
            })
            .addCase(fetchLoginResult.pending.type, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchLoginResult.fulfilled.type, handleLogin)
            .addCase(fetchLoginResult.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.error = action.payload.message ? Error(action.payload.message) : null;
                state.isLoading = false;
            })
            .addCase(fetchLogoutResult.pending.type, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchLogoutResult.fulfilled.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.message = action.payload.message ? action.payload.message : null;
                state.isLoading = false;
                state.accessToken = '';
                state.refreshToken = '';
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            })
            .addCase(fetchLogoutResult.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.error = action.payload.message ? Error(action.payload.message) : null;
                state.isLoading = false;
            })
            .addCase(fetchRefreshTokenResult.pending.type, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRefreshTokenResult.fulfilled.type, (state, action: PayloadAction<AuthResponse>) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.success = action.payload.success;
                state.isLoading = false;
                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem('refreshToken', action.payload.refreshToken);
            })
            .addCase(fetchRefreshTokenResult.rejected.type, (state, action) => {
                state.isLoading = false;
            })
    }
})

function handleLogin(state: TInitialState, action: PayloadAction<UserResponseToken>) {
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
    state.isLoading = false;
    localStorage.setItem('accessToken', action.payload.accessToken);
    localStorage.setItem('refreshToken', action.payload.refreshToken);
}

export default Register.reducer;