import {RootState} from "../store";

export const getCards = (store: RootState) => store.cards.cardsArray;
export const getCardsLoading = (store: RootState) => store.cards.isLoading;

export const constructorSelector = (store: RootState) => store.burgerConstructor.constructorIngredient;

export const getModalOrderSelector = (store: RootState) => store.popupOrder.isModalState;

export const getOrderDetailsSelector = (store: RootState) => store.orderDetails;

export const totalPriceSelector = (store: RootState) => store.burgerConstructor.totalPrice;

export const getAccessToken = (store: RootState) => store.accessToken.accessToken;

export const ordersSelector = (store: RootState) => store.wsOrders.orders;

export const totalSelector = (store: RootState) => store.wsOrders.total;

export const totalTodaySelector = (store: RootState) => store.wsOrders.totalToday;

export const userOrdersSelector = (store: RootState) => store.wsUserOrders.orders;

export const orderInfoSelector = (store: RootState) => store.orderInfo.info;