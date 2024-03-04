import checkResponse from "./checkResponse";
import {urlApi} from "./Api";

export const urlApiAuth = "https://norma.nomoreparties.space/api/auth";

export const postForgotPasswordRequest = (email) => {
    return fetch(`${urlApi}/password-reset`, {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}

export const postResetPasswordRequest = ({password, token}) => {
    return fetch(`${urlApi}/password-reset/reset`, {
        method: "POST",
        body: JSON.stringify({password, token}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}


export const postRegisterProfileRequest = ({name, email, password}) => {
    return fetch(`${urlApiAuth}/register`, {
        method: "POST",
        body: JSON.stringify({name, email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}

export const postLoginRequest = ({email, password}) => {
    return fetch(`${urlApiAuth}/login`, {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}

export const getInfoProfileRequest = (token) => {
    return fetch(`${urlApiAuth}/user`, {
        method: "GET",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}

