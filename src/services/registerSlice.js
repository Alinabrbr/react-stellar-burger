import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postRegisterProfileRequest} from "../utils/auth";

const initialState = {
    isLoading: "",
    error: "",
    accessToken: null,
    refreshToken: null
};

export const fetchRegisterProfileResult = createAsyncThunk(
    `register/fetchAccessTokenResult`,
    async (name, email, password) => {
        return await postRegisterProfileRequest(name, email, password).then((data) => data);
    }
);

const Register = createSlice({
    name: 'orderPopup',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchRegisterProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchRegisterProfileResult.fulfilled.type, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLoading = false;
                localStorage.setItem('refreshToken', action.payload.refreshToken);
            })
            .addCase(fetchRegisterProfileResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default Register.reducer;
// export const {openPopup, closePopup} = orderPopupSlice.actions;