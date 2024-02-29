import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export default function LogIn () {
    return (
        <div>
            <h2>Вход</h2>
            <form>
                <Input type={'email'} placeholder={'E-mail'}/>
                <Input type={'password'} placeholder={'Пароль'}/>
                <Button htmlType="submit" type="primary" size="small" extraClass="ml-2">
                    Войти
                </Button>

                <div>
                    <p>Вы - новый пользователь?</p>
                    <Button htmlType="button" type="secondary" size="small">
                        Зарегистрироваться
                    </Button>
                </div>

                <div>
                    <p>Забыли пароль?</p>
                    <Button htmlType="button" type="secondary" size="small">
                        Восстановить пароль
                    </Button>
                </div>

            </form>
        </div>
    )
}