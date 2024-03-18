import {request} from "./api";
import {UserResponseToken} from "./types/types";

export const getRefreshTokenRequest = (token: string): Promise<any> => {
    return request<UserResponseToken>(`/auth/token`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    });
}
