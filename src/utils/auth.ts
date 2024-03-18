import {request, requestWithRefresh} from "./api";
import {UserResponse, UserResponseToken} from "./types/types";

export type TProfileRequest = {
    name: string;
    email: string;
    password: string;
}

type TLoginRequest = {
    email: string;
    password: string;
}

type TPostResetPasswordRequest = {
    password: string;
    token: string;
}

export const postForgotPasswordRequest = (email: {email: string}): Promise<any> => {
    return request<UserResponse>(`/password-reset`, {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}

export const postResetPasswordRequest = ({password, token}: TPostResetPasswordRequest): Promise<any> => {
    return request<UserResponse>(`/password-reset/reset`, {
        method: "POST",
        body: JSON.stringify({password, token}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}

export const postRegisterProfileRequest = ({name, email, password}: TProfileRequest): Promise<any> => {
    return request<UserResponseToken>(`/auth/register`, {
        method: "POST",
        body: JSON.stringify({name, email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}

export const postLoginRequest = ({email, password}: TLoginRequest): Promise<any> => {
    return requestWithRefresh<UserResponseToken>(`/auth/login`, {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
}

export const getInfoProfileRequest = (): Promise<any> => {
    return requestWithRefresh<UserResponse>(`/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.getItem("accessToken") || "",
        } as HeadersInit,
    });
}


export const getEditInfoProfileRequest = ({name, email, password}: TProfileRequest): Promise<any> => {
    return requestWithRefresh<UserResponse>(`/auth/user`, {
        method: "PATCH",
        body: JSON.stringify({ name, email, password}),
        headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.getItem("accessToken") || "",
        },
    })
}

