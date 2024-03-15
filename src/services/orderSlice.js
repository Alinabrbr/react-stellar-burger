import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isModalState: false,
};

const orderPopupSlice = createSlice({
    name: 'orderPopup',
    initialState,
    reducers: {
        openPopup: (state) => {
            state.isModalState = true;
        },
        closePopup: (state) => {
            state.isModalState = false;
        },
    }
})

export default orderPopupSlice.reducer;
export const {openPopup, closePopup} = orderPopupSlice.actions;