import {RootState} from "./store";

export const constructorSelector = (store: RootState) => store.burgerConstructor.constructorIngredient;