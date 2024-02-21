import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./services/cardsSlice";
import popupInfoReducer from "./services/ingredientsInfoSlice";
import popupOrderReducer from "./services/constructorSlice";


export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        popupInfo: popupInfoReducer,
        popupOrder: popupOrderReducer
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
