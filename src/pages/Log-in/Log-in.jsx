import React, {useState} from "react";
import styles from "./Log-in.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoginResult} from "../../services/registerAndAuthorizationSlice";
import clsx from "clsx";

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
        <div className={styles.formContainer}>

            <h2 className={"text_type_main-medium mb-6"}>Вход</h2>

            <form className={styles.form} onSubmit={login}>

                <EmailInput type={'email'} placeholder={'E-mail'} value={email} icon="EditIcon"
                       onChange={(event) => setEmail(event.target.value)}/>
                <PasswordInput type={'password'} placeholder={'Пароль'} name={"password"} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>

                <div className={styles.buttonContainer}>
                    <Button htmlType="submit" type="primary" size="medium" extraClass="ml-2">
                        <p className={'text_type_main-default'}>Войти</p>
                    </Button>
                </div>

                <div className={'mt-20'}>
                    <div className={styles.textContainer}>
                        <p className={clsx(styles.text, 'text_type_main-default')}>Вы - новый пользователь?</p>
                        <Link to='/register'>
                            <Button htmlType="button" type="secondary" size="medium">
                                Зарегистрироваться
                            </Button>
                        </Link>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={clsx(styles.text, 'text_type_main-default')}>Забыли пароль?</p>
                        <Link to='/forgot-password'>
                            <Button htmlType="button" type="secondary" size="medium">
                                Восстановить пароль
                            </Button>
                        </Link>
                    </div>

                </div>

            </form>
        </div>
    )
}