import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    content: null
};

const popupInfoSlice = createSlice({
    name: 'popupInfo',
    initialState,
    reducers: {
        openPopup: (state, action) => {
            state.isModalOpen = true;
            state.content = action.payload;
        },
        closePopup: (state, action) => {
            state.isModalOpen = false;
            state.content = null;
        },
    }
})

export default popupInfoSlice.reducer;
export const {openPopup, closePopup} = popupInfoSlice.actions;