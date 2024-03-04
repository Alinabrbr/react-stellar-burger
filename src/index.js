import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./services/cardsSlice";
import popupInfoReducer from "./services/ingredientsInfoSlice";
import popupOrderReducer from "./services/orderSlice";
import burgerConstructorReducer from "./services/constructorSlice";
import orderDetailsReducer from "./services/orderDetailsSlice";
import registerReducer from "./services/registerAndAuthorizationSlice";
import {BrowserRouter} from "react-router-dom";
import forgotPasswordReducer from "./services/forgotPasswordSlice";
import resetPasswordReducer from "./services/resetPasswordSlice";
import logoutReducer from "./services/logoutSlice";
import profileInfoReducer from "./services/getInfoProfileSlice";


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
        messageLogout: logoutReducer,
        profileInfo: profileInfoReducer
    }
})

ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
