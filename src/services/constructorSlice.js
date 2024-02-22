import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    constructorIngredient: []
};

const constructorSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        addIngredient: {
            reducer: (state, action) => {
                if (action.payload.type === 'bun' && state.constructorIngredient.map((ingredient) => ingredient.type === "bun")) {
                    state.constructorIngredient = state.constructorIngredient.filter((ingredient) => ingredient.type !== 'bun')
                }
                state.constructorIngredient.push(action.payload);
            },
            prepare: (payload) => {
                return {
                    payload: {
                        ...payload,
                        ingredientId: uuidv4()
                    },
                };
            },
        },
        removeIngredient: (state, action) => {
            state.constructorIngredient = state.constructorIngredient.filter((ingredient) => ingredient.ingredientId !== action.payload);
        },
    }
})

export default constructorSlice.reducer;
export const {addIngredient, removeIngredient} = constructorSlice.actions;