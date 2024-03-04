import checkResponse from "./checkResponse";

export const urlApi = "https://norma.nomoreparties.space/api";

export const fetchCard = () => {
    return fetch(`${urlApi}/ingredients`)
        .then(checkResponse);
}

export const postOrderRequest = (ingredients) => {
    return fetch(`${urlApi}/orders`, {
        method: "POST",
        body: JSON.stringify(ingredients),
        headers: {
            "Content-Type": 'application/json',
        },
    })
    .then(checkResponse);
}

