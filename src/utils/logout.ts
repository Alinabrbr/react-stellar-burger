import {request} from "./api";

export const postLogoutRequest = (token: string): Promise<any> => {
    return request(`/auth//logout`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    });
}