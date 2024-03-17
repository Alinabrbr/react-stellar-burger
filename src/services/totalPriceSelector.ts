import {RootState} from "./store";

export const totalPriceSelector = (store: RootState) => store.burgerConstructor.totalPrice;