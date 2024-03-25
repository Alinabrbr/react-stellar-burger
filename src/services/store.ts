import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./reducers/cardsSlice";
import popupInfoReducer from "./reducers/ingredientsInfoSlice";
import popupOrderReducer from "./reducers/orderSlice";
import burgerConstructorReducer from "./reducers/constructorSlice";
import orderDetailsReducer from "./reducers/orderDetailsSlice";
import registerReducer from "./reducers/registerAndAuthorizationSlice";
import forgotPasswordReducer from "./reducers/forgotPasswordSlice";
import resetPasswordReducer from "./reducers/resetPasswordSlice";
import profileInfoReducer from "./reducers/getInfoProfileSlice";


export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        popupInfo: popupInfoReducer,
        popupOrder: popupOrderReducer,
        burgerConstructor: burgerConstructorReducer,
        orderDetails: orderDetailsReducer,
        accessToken: registerReducer,
        successForgotPassword: forgotPasswordReducer,
        successResetPassword: resetPasswordReducer,
        profileInfo: profileInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;