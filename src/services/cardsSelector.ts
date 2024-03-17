import {RootState} from "./store";

export const getCards = (store: RootState) => store.cards.cardsArray;
export const getCardsLoading = (store: RootState) => store.cards.isLoading;