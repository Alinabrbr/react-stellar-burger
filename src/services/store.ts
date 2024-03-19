import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import popupInfoReducer from "./ingredientsInfoSlice";
import popupOrderReducer from "./orderSlice";
import burgerConstructorReducer from "./constructorSlice";
import orderDetailsReducer from "./orderDetailsSlice";
import registerReducer from "./registerAndAuthorizationSlice";
import forgotPasswordReducer from "./forgotPasswordSlice";
import resetPasswordReducer from "./resetPasswordSlice";
import profileInfoReducer from "./getInfoProfileSlice";


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