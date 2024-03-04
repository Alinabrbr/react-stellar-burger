import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postLogoutRequest} from "../utils/logout";

const initialState = {
    isLoading: false,
    error: "",
    message: ""
};

export const fetchLogoutResult = createAsyncThunk(
    `profile/fetchLogoutResult`,
    async (token) => {
        return await postLogoutRequest(token).then((data) => data);
    }
);

const logout = createSlice({
    name: 'password',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchLogoutResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchLogoutResult.fulfilled.type, (state, action) => {
                state.message = action.payload.message;
                state.isLoading = false;
            })
            .addCase(fetchLogoutResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default logout.reducer;