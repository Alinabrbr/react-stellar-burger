import {request, requestWithRefresh} from "./api";

export const postForgotPasswordRequest = (email) => {
    return request(`/password-reset`, {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}

export const postResetPasswordRequest = ({password, token}) => {
    return request(`/password-reset/reset`, {
        method: "POST",
        body: JSON.stringify({password, token}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}


export const postRegisterProfileRequest = ({name, email, password}) => {
    return request(`/auth/register`, {
        method: "POST",
        body: JSON.stringify({name, email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}

export const postLoginRequest = ({email, password}) => {
    return requestWithRefresh(`/auth/login`, {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}



export const getInfoProfileRequest = (token) => {
    return requestWithRefresh(`/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": token || "",
        },
    });
}


export const getEditInfoProfileRequest = ({ name, email, password}) => {
    return requestWithRefresh(`/auth/user`, {
        method: "PATCH",
        body: JSON.stringify({ name, email, password}),
        headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.getItem("accessToken") || "",
        },
    })
}

