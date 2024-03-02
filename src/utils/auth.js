import checkResponse from "./checkResponse";

const urlApiAuth = "https://norma.nomoreparties.space/api/auth";


// const getPasswordSuccess = (payload) => ({
//     type: GET_PASSWORD_SUCCESS,
//     payload
// })

// export const postResetPasswordRequest = (email) => {
//     return fetch(`${urlApi}/password-reset`, {
//         method: "POST",
//         body: JSON.stringify(email),
//         headers: {
//             "Content-Type": 'application/json',
//         },
//     })
//         .then(({ success, message }) => {
//             useDispatch(getPasswordSuccess(success));
//         })
//         .catch(console.warn);
// }

export const postRegisterProfileRequest = ({name, email, password}) => {
    return fetch(`${urlApiAuth}/register`, {
        method: "POST",
        body: JSON.stringify({name, email, password}),
        headers: {
            "Content-Type": 'application/json',
        },
    })
        .then(checkResponse);
}