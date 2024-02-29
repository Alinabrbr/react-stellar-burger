import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export default function Register () {
    return (
        <div>
            <h2>Регистрация</h2>
            <form>
                <Input type={'text'} placeholder={'Имя'}/>
                <Input type={'email'} placeholder={'E-mail'}/>
                <Input type={'password'} placeholder={'Пароль'}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Зарегистрироваться
                </Button>
                <p>Уже зарегистрированы?</p>
                <Button htmlType="button" type="secondary" size="small">
                    Войти
                </Button>
            </form>
        </div>
    )
}