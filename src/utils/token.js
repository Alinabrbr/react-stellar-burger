import {request} from "./api";

export const getRefreshTokenRequest = (token) => {
    return request(`/auth/token`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    });
}
