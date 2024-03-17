import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {getEditInfoProfileRequest, getInfoProfileRequest} from "../utils/auth";
import {UserResponse} from "../utils/types/types";

type TInitialState = {
    isLoading: boolean;
    error: SerializedError | null;
    name: string;
    email: string;
}

const initialState: TInitialState = {
    isLoading: true,
    error: null,
    name: "",
    email: ""
};

export const fetchInfoProfileResult = createAsyncThunk(
    `profileInfo/fetchInfoProfileResult`,
    getInfoProfileRequest
);

// export const fetchEditInfoProfileResult = createAsyncThunk(
//     `profileInfo/fetchEditInfoProfileResult`,
//     async ({name, email, password}) => {
//         return await getEditInfoProfileRequest({name, email, password}).then((data) => data);
//     }
// );

export const fetchEditInfoProfileResult = createAsyncThunk(
    `profileInfo/fetchEditInfoProfileResult`,
    getEditInfoProfileRequest
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
                state.error = null;
            })
            .addCase(fetchInfoProfileResult.fulfilled.type, (state, action: PayloadAction<any>) => {
                state.name = action.payload.user.name;
                state.email = action.payload.user.email;
                state.isLoading = false;
            })
            .addCase(fetchInfoProfileResult.rejected.type, (state, action: any) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchEditInfoProfileResult.pending.type, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEditInfoProfileResult.fulfilled.type, (state, action: PayloadAction<UserResponse>) => {
                state.name = action.payload.user.name;
                state.email = action.payload.user.email;
                state.isLoading = false;
            })
            .addCase(fetchEditInfoProfileResult.rejected.type, (state, action: any) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default profileInfo.reducer;
export const {setUser} = profileInfo.actions;