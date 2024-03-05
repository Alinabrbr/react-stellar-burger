import React, {useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchForgotPasswordResult} from "../../services/forgotPasswordSlice";
import styles from "./Forgot-password.module.css"
import clsx from "clsx";

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
        <div className={styles.formContainer}>

            <h2 className={"text_type_main-medium mb-6"}>Восстановление пароля</h2>

            <form className={styles.form} onSubmit={forgotPassword}>

                <EmailInput type={'email'} placeholder={'Укажите e-mail'} value={email}
                            onChange={(event) => setEmail(event.target.value)}/>

                <div className={styles.buttonContainer}>
                    <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                        <p className={'text_type_main-default'}>Восстановить</p>
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