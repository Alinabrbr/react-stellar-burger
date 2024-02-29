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


export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        popupInfo: popupInfoReducer,
        popupOrder: popupOrderReducer,
        burgerConstructor: burgerConstructorReducer,
        orderDetails: orderDetailsReducer
    }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
