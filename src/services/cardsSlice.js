import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCard} from "../utils/Api";

const initialState = {
    cardsArray: [],
    isLoading: false,
    error: ''
};

export const getIngredients = createAsyncThunk(
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
            .addCase(getIngredients.pending.type, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getIngredients.fulfilled.type, (state, action) => {
                state.cardsArray = action.payload;
                state.isLoading = false;
            })
            .addCase(getIngredients.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default cardsSlice.reducer;