import checkResponse from "./checkResponse";
import {urlApiAuth} from "./auth";

export const postLogoutRequest = (token) => {
    return fetch(`${urlApiAuth}/logout`, {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}