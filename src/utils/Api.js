import checkResponse from "./checkResponse";

export const urlApi = "https://norma.nomoreparties.space/api";

export const fetchCard = () => {
    return fetch(`${urlApi}/ingredients`)
        .then(checkResponse);
}

export const postOrderRequest = ({ingredients, token}) => {
    return fetch(`${urlApi}/orders`, {
        method: "POST",
        body: JSON.stringify({"ingredients": ingredients}),
        headers: {
            "Content-Type": 'application/json',
            "Authorization": token,
        },
    })
    .then(checkResponse);
}

