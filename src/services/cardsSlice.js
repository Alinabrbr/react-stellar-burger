import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cardsArray: [],
    isLoading: false,
    error: ''
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardsUploading: (state,action) => {
        state.isLoading = true;
        state.error = '';
        },
        cardsLoadError: (state,action) => {
        state.error = action.payload;
        state.isLoading = false;
        },
        cardsLoaded: (state, action) => {
            state.cardsArray = action.payload;
            state.isLoading = false;
        }
    }
})

export default cardsSlice.reducer;
export const {cardsLoaded, cardsUploading, cardsLoadError} = cardsSlice.actions;