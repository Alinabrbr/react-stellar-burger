import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export default function ForgotPassword () {
    return (
        <div>
            <h2>Восстановление пароля</h2>
            <form>
                <Input type={'email'} placeholder={'Укажите e-mail'}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Восстановить
                </Button>
                <p>Вспомнили пароль?</p>
                <Button htmlType="button" type="secondary" size="small">
                    Войти
                </Button>
            </form>
        </div>
    )
}