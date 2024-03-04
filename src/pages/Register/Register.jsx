import React, {useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {fetchRegisterProfileResult} from "../../services/registerAndAuthorizationSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Register() {
    const dispatch = useDispatch()

    const auth = useSelector((state) => state.accessToken.accessToken);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function registerProfile(event) {
        event.preventDefault();
        dispatch(fetchRegisterProfileResult({name: name, email: email, password: password}));

        setName('');
        setEmail('');
        setPassword('');
    }

    if (auth) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={registerProfile}>
                <Input type='text' id='name' placeholder='Имя' value={name}
                       onChange={(event) => setName(event.target.value)}/>
                <Input type='email' id='email' placeholder='E-mail' value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
                <Input type='password' id='password' placeholder='Пароль' value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Зарегистрироваться
                </Button>
                <p>Уже зарегистрированы?</p>
                <Link to='/login'>
                    Войти
                </Link>
            </form>
        </div>
    )
}