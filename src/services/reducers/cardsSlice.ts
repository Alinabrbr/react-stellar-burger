import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {fetchCard} from "../../utils/api";
import {TIngredient, TMessageResponse} from "../../utils/types/types";

type TInitialState = {
    cardsArray: TIngredient[];
    isLoading: boolean;
    error: SerializedError | null;
}

export const initialState: TInitialState = {
    cardsArray: [],
    isLoading: false,
    error: null
};

export const getIngredients = createAsyncThunk(
    'cardsGet',
    async () => {
        return await fetchCard().then((data) => data.data);
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getIngredients.pending.type, state => {
                state.cardsArray = [];
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getIngredients.fulfilled.type, (state, action: PayloadAction<TIngredient[]>) => {
                state.cardsArray = action.payload;
                state.isLoading = false;
            })
            .addCase(getIngredients.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
                state.error = action.payload.message ? Error(action.payload.message) : null;
                state.isLoading = false;
            })
    }
})

export default cardsSlice.reducer;