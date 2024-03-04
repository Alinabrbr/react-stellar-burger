import React, {useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoginResult} from "../../services/registerAndAuthorizationSlice";
import {fetchInfoProfileResult} from "../../services/getInfoProfileSlice";

export default function LogIn () {

    const dispatch = useDispatch()

    const auth = useSelector((state) => state.accessToken.accessToken);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(event) {
        event.preventDefault();
        dispatch(fetchLoginResult({email: email, password: password}));

        setEmail('');
        setPassword('');

    }

    if (auth) {
        return (
            <Navigate to={'/profile'} />
        )
    }

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={login}>
                <Input type={'email'} placeholder={'E-mail'} value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
                <Input type={'password'} placeholder={'Пароль'} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Войти
                </Button>

                <div>
                    <p>Вы - новый пользователь?</p>
                    <Link to='/register'>
                        Зарегистрироваться
                    </Link>
                </div>

                <div>
                    <p>Забыли пароль?</p>
                    <Link to='/forgot-password'>
                        Восстановить пароль
                    </Link>
                </div>

            </form>
        </div>
    )
}