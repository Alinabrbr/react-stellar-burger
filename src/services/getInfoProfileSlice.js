import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getEditInfoProfileRequest, getInfoProfileRequest} from "../utils/auth";

const initialState = {
    isLoading: true,
    error: "",
    name: "",
    email: ""
};

export const fetchInfoProfileResult = createAsyncThunk(
    `profileInfo/fetchInfoProfileResult`,
    async (accessToken) => {
        return await getInfoProfileRequest(accessToken);
    }
);

export const fetchEditInfoProfileResult = createAsyncThunk(
    `profileInfo/fetchEditInfoProfileResult`,
    async ({token, name, email}) => {
        return await getEditInfoProfileRequest({token, name, email}).then((data) => data);
    }
);

const profileInfo = createSlice({
    name: 'profileInfo',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchInfoProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchInfoProfileResult.fulfilled.type, (state, action) => {
                state.name = action.payload.user.name;
                state.email = action.payload.user.email;
                state.isLoading = false;
            })
            .addCase(fetchInfoProfileResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchEditInfoProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchEditInfoProfileResult.fulfilled.type, (state, action) => {
                state.name = action.payload.user.name;
                state.email = action.payload.user.email;
                state.isLoading = false;
            })
            .addCase(fetchEditInfoProfileResult.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default profileInfo.reducer;
export const {setUser} = profileInfo.actions;