import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {createAsyncThunk} from "@reduxjs/toolkit";
// import {postOrderRequest, postResetPasswordRequest} from "../../utils/Api";


// export const fetchResetPasswordResult = createAsyncThunk(
//     `orderDetails/fetchOrderResult`,
//     async (email) => {
//         return await postResetPasswordRequest(email);
//     }
// );

export default function ForgotPassword () {
    return (
        <div>
            <h2>Восстановление пароля</h2>
            <form>
                <Input type={'email'} placeholder={'Укажите e-mail'}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Восстановить
                </Button>
                <p>Вспомнили пароль?</p>
                <Link to='/login'>
                    Войти
                </Link>
                {/*onClick={postResetPasswordRequest(email)*/}
            </form>
        </div>
    )
}