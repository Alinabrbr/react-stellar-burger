import React, {useEffect, useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import {fetchResetPasswordResult} from "../../services/resetPasswordSlice";
import styles from "../Register/Register.module.css";
import clsx from "clsx";
import {useAppDispatch, useAppSelector} from "../../utils/types/types";

export default function ResetPassword() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const successReset = useAppSelector((state) => state.successResetPassword.success);

    useEffect(() => {
        if (!location.state?.fromForgotPassword) {
            navigate("/");
        }
    }, [location, navigate]);

    function resetPassword(event: React.FormEvent<HTMLFormElement>) {
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
                <PasswordInput placeholder={'Введите новый пароль'} value={password}
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