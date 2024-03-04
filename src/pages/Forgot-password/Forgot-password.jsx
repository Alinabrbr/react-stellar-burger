import React, {useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchForgotPasswordResult} from "../../services/forgotPasswordSlice";

export default function ForgotPassword() {
    const dispatch = useDispatch()

    const successForgot = useSelector((state) => state.successForgotPassword.success);

    const [email, setEmail] = useState('')

    function forgotPassword(event) {
        event.preventDefault();
        dispatch(fetchForgotPasswordResult({email: email}));
    }

    if (successForgot) {
        return (
            <Navigate to={'/reset-password'} />
        )
    }

    return (
        <div>
            <h2>Восстановление пароля</h2>
            <form onSubmit={forgotPassword}>
                <Input type={'email'} placeholder={'Укажите e-mail'} value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Восстановить
                </Button>
                <p>Вспомнили пароль?</p>
                <Link to='/login'>
                    Войти
                </Link>
            </form>
        </div>
    )
}