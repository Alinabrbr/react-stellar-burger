import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    constructorIngredient: [],
    totalPrice: 0,
};

const constructorSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        addIngredient: {
            reducer: (state, action) => {
                if (action.payload.type === 'bun' && state.constructorIngredient.find((ingredient) => ingredient.type === "bun")) {
                    state.totalPrice -= state.constructorIngredient.find((ingredient) => ingredient.type === "bun").price * 2;
                    state.constructorIngredient = state.constructorIngredient.filter((ingredient) => ingredient.type !== 'bun')
                }

                state.constructorIngredient.push(action.payload);

                if (action.payload.type === 'bun') {
                    state.totalPrice += action.payload.price * 2;
                } else {
                    state.totalPrice += action.payload.price;
                }
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
            state.constructorIngredient = state.constructorIngredient.filter((ingredient) => ingredient.ingredientId !== action.payload.ingredientId);
            state.totalPrice -= action.payload.price;
        },
        sortIngredients: (state, action) => {
            const {indexFrom, indexTo, ingredient} = action.payload;
            state.constructorIngredient.splice(indexFrom, 1);
            state.constructorIngredient.splice(indexTo, 0, ingredient);
        },
        clearStore: (state) => {
            state.constructorIngredient = [];
            state.totalPrice = 0;
        }
    }
})

export default constructorSlice.reducer;
export const {addIngredient, removeIngredient, sortIngredients, clearStore} = constructorSlice.actions;