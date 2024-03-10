import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postLoginRequest, postRegisterProfileRequest} from "../utils/auth";
import {getRefreshTokenRequest} from "../utils/token";
import {postLogoutRequest} from "../utils/logout";

const initialState = {
    isLoading: "",
    error: "",
    success: false,
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    message: ""
};

export const fetchRegisterProfileResult = createAsyncThunk(
    `register/fetchAccessTokenResult`,
    async (name, email, password) => {
        return await postRegisterProfileRequest(name, email, password).then((data) => data);
    }
);

export const fetchLoginResult = createAsyncThunk(
    `login/fetchAccessTokenResult`,
    async (email, password) => {
        return await postLoginRequest(email, password).then((data) => data);
    }
);

export const fetchLogoutResult = createAsyncThunk(
    'logout',
    async (token) => {
        return await postLogoutRequest(token).then((data) => data);
    }
);

export const fetchRefreshTokenResult = createAsyncThunk(
    `token/fetchRefreshTokenResult`,
    async (token) => {
        return await getRefreshTokenRequest(token).then((data) => data);
    }
);

const Register = createSlice({
    name: 'register',
    initialState,
    reducers: {
        clearAccessToken: (state) => {
            state.accessToken = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRegisterProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchRegisterProfileResult.fulfilled.type, handleLogin)
            .addCase(fetchRegisterProfileResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchLoginResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchLoginResult.fulfilled.type, handleLogin)
            .addCase(fetchLoginResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchLogoutResult.pending.type, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchLogoutResult.fulfilled.type, (state, action) => {
                state.message = action.payload.message;
                state.isLoading = false;
                state.accessToken = '';
                state.refreshToken = '';
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            })
            .addCase(fetchLogoutResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchRefreshTokenResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchRefreshTokenResult.fulfilled.type, (state, action) => {
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

function handleLogin(state, action) {
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
    state.isLoading = false;
    localStorage.setItem('accessToken', action.payload.accessToken);
    localStorage.setItem('refreshToken', action.payload.refreshToken);
}

export default Register.reducer;
export const {clearAccessToken} = Register.actions;