export const getCard = () => {
    return fetch('https://norma.nomoreparties.space/api/ingredients')
        .then((res) => res.ok ? res.json() : Promise.reject(new Error('Отклонено')));
}