import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

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
                    <Link to='/register'>
                        Зарегистрироваться
                    </Link>
                </div>

                <div>
                    <p>Забыли пароль?</p>
                    <Link to='/forgot-password'>
                        Восстановить пароль
                    </Link>
                </div>

            </form>
        </div>
    )
}