import {request} from "./api";
import {UserResponse} from "./types/types";

export const postLogoutRequest = (): Promise<any> => {
    return request<UserResponse>(`/auth//logout`, {
        method: "POST",
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken'),
        }),
        headers: {
            "Content-Type": 'application/json',
        },
    });
}