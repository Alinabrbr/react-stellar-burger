import React, {useState} from "react";
import styles from "./Log-in.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {fetchLoginResult} from "../../services/registerAndAuthorizationSlice";
import clsx from "clsx";
import {useAppDispatch} from "../../utils/types/types";

export default function LogIn(): JSX.Element {
    const dispatch = useAppDispatch;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(event:  React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(fetchLoginResult({email: email, password: password}));
    }

    return (
        <div className={styles.formContainer}>

            <h2 className={"text_type_main-medium mb-6"}>Вход</h2>

            <form className={styles.form} onSubmit={login}>

                <EmailInput placeholder={'E-mail'} value={email} isIcon={false} autoComplete='email'
                            onChange={(event) => setEmail(event.target.value)}/>
                <PasswordInput placeholder={'Пароль'} name={"password"} value={password}
                               autoComplete='current-password'
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