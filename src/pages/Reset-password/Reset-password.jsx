import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

export default function ResetPassword () {
    return (
        <div>
            <h2>Восстановление пароля</h2>
            <form>
                <Input type={'password'} placeholder={'Введите новый пароль'}/>
                <Input type={'text'} placeholder={'Введите код из письма'}/>
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