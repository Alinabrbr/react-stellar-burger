import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isModalState: false,
};

const orderPopupSlice = createSlice({
    name: 'orderPopup',
    initialState,
    reducers: {
        openPopup: (state,action) => {
            state.isModalState = true;
        },
        closePopup: (state,action) => {
            state.isModalState = false;
        },
    }
})

export default orderPopupSlice.reducer;
export const {openPopup, closePopup} = orderPopupSlice.actions;