import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getInfoProfileRequest} from "../utils/auth";

const initialState = {
    isLoading: false,
    error: "",
    name: "",
    email: ""

};

export const fetchInfoProfileResult = createAsyncThunk(
    `profileInfo/fetchInfoProfileResult`,
    async (token) => {
        return await getInfoProfileRequest(token).then((data) => data && console.log(data));
    }
);

const profileInfo = createSlice({
    name: 'profileInfo',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchInfoProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchInfoProfileResult.fulfilled.type, (state, action) => {
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.isLoading = false;
            })
            .addCase(fetchInfoProfileResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default profileInfo.reducer;