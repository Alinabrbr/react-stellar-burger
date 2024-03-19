import {RootState} from "./store";

export const getModalOrderSelector = (store: RootState) => store.popupOrder.isModalState;