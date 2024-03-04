import React, {useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchResetPasswordResult} from "../../services/resetPasswordSlice";

export default function ResetPassword () {
    const dispatch = useDispatch()

    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const successReset = useSelector((state) => state.successResetPassword.success);

    function resetPassword(event) {
        event.preventDefault();
        dispatch(fetchResetPasswordResult({password: password, token: token}));

        setPassword('');
        setToken('');
    }

    if (successReset) {
        return (
            <Navigate to={'/login'} />
        )
    }

    return (
        <div>
            <h2>Восстановление пароля</h2>
            <form onSubmit={resetPassword}>
                <Input type={'password'} placeholder={'Введите новый пароль'} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
                <Input type={'text'} placeholder={'Введите код из письма'} value={token}
                       onChange={(event) => setToken(event.target.value)}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Сохранить
                </Button>
                <p>Вспомнили пароль?</p>
                <Link to='/login'>
                    Войти
                </Link>
            </form>
        </div>
    )
}