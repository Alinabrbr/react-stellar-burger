import checkResponse from "./checkResponse";
import {urlApiAuth} from "./auth";

export const getRefreshTokenRequest = (token) => {
    return fetch(`${urlApiAuth}/token`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}