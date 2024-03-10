import React, {useState} from "react";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {fetchRegisterProfileResult} from "../../services/registerAndAuthorizationSlice";
import {useDispatch} from "react-redux";
import clsx from "clsx";
import styles from "../Register/Register.module.css";

export default function Register() {
    const dispatch = useDispatch()

    const auth = localStorage.getItem("accessToken");

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
        <div className={styles.formContainer}>

            <h2 className={"text_type_main-medium mb-6"}>Регистрация</h2>

            <form className={styles.form} onSubmit={registerProfile}>

                <Input type='text' id='name' placeholder='Имя' value={name} autoComplete='name'
                       onChange={(event) => setName(event.target.value)}/>

                <EmailInput type='email' id='email' placeholder='E-mail' value={email} autoComplete='email'
                       onChange={(event) => setEmail(event.target.value)}/>

                <PasswordInput type='password' id='password' placeholder='Пароль' value={password} autoComplete='new-password'
                       onChange={(event) => setPassword(event.target.value)}/>


                <div className={styles.buttonContainer}>
                    <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                        <p className={'text_type_main-default'}>Зарегистрироваться</p>
                    </Button>
                </div>

                    <div className={styles.textContainer}>
                        <p className={clsx(styles.text, 'text_type_main-default')}>Уже зарегистрированы?</p>

                        <Link to='/login'>
                            <Button htmlType="button" type="secondary" size="medium">
                                Войти
                            </Button>
                        </Link>
                    </div>
            </form>
        </div>
)
}