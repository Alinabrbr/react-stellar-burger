
export const getCard = () => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
        .then((res) => res.json())
        .then((data) => data.data)
        .catch((err) => {console.log(err)});
}