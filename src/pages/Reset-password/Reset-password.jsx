import React, {useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchResetPasswordResult} from "../../services/resetPasswordSlice";
import styles from "../Register/Register.module.css";
import clsx from "clsx";

export default function ResetPassword() {
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
            <Navigate to={'/login'}/>
        )
    }

    return (
        <div className={styles.formContainer}>

            <h2 className={"text_type_main-medium mb-6"}>Восстановление пароля</h2>

            <form className={styles.form} onSubmit={resetPassword}>
                <PasswordInput type={'password'} placeholder={'Введите новый пароль'} value={password}
                               onChange={(event) => setPassword(event.target.value)}/>
                <Input type={'text'} placeholder={'Введите код из письма'} value={token}
                       onChange={(event) => setToken(event.target.value)}/>

                <div className={styles.buttonContainer}>
                    <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                        <p className={'text_type_main-default'}>Сохранить</p>
                    </Button>
                </div>

                <div className={styles.textContainer}>
                    <p className={clsx(styles.text, 'text_type_main-default')}>Вспомнили пароль?</p>
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