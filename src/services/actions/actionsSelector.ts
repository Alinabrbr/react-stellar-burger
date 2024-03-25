import {RootState} from "../store";

export const getCards = (store: RootState) => store.cards.cardsArray;
export const getCardsLoading = (store: RootState) => store.cards.isLoading;

export const constructorSelector = (store: RootState) => store.burgerConstructor.constructorIngredient;

export const getModalOrderSelector = (store: RootState) => store.popupOrder.isModalState;

export const getOrderDetailsSelector = (store: RootState) => store.orderDetails;

export const totalPriceSelector = (store: RootState) => store.burgerConstructor.totalPrice;

export const getAccessToken = (store: RootState) => store.accessToken.accessToken;