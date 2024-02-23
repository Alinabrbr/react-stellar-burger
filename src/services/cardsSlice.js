import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCard} from "../utils/Api";
import {getCards} from "./actions/card";

const initialState = {
    cardsArray: [],
    isLoading: false,
    error: ''
};

export const takeCards = createAsyncThunk(
    'cardsGet',
    async () => {
        return await getCard().then((data) => data.data);
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(takeCards.pending.type, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(takeCards.fulfilled.type, (state, action) => {
                state.cardsArray = action.payload;
                state.isLoading = false;
            })
            .addCase(takeCards.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default cardsSlice.reducer;
export const {cardsLoaded, cardsUploading, cardsLoadError} = cardsSlice.actions;