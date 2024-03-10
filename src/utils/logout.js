import {request} from "./api";

export const postLogoutRequest = (token) => {
    return request(`/auth//logout`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    });
}