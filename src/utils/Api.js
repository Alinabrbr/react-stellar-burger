const urlApi = "https://norma.nomoreparties.space/api";

export const getCard = () => {
    return fetch(`${urlApi}/ingredients`)
        .then((res) => res.ok ? res.json() : Promise.reject(new Error('Отклонено')));
}

export const postOrderRequest = (ingredients) => {
    return fetch(`${urlApi}/orders`, {
        method: "POST",
        body: JSON.stringify(ingredients),
        headers: {
            "Content-Type": 'application/json',
        },
    })
    .then((res) => res.ok ? res.json() : Promise.reject(new Error('Отклонено')));
}