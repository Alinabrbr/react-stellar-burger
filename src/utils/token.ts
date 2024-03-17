import {request} from "./api";

export const getRefreshTokenRequest = (token: string): Promise<any> => {
    return request(`/auth/token`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    });
}
