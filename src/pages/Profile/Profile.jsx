import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import NavBar from "../../components/Nav-bar/Nav-bar";
import {NavLink} from "react-router-dom";
import styles from "../Profile/Profile.module.css"
import clsx from "clsx";

export default function Profile () {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <nav className={clsx(styles.navList, 'text_type_main-medium')}>

                    <NavLink to='/profile'>
                        <p className={'text_type_main-medium mt-4 mb-4'}>Профиль</p>
                    </NavLink>

                    <NavBar>
                        <p className={clsx(styles.text, 'text_type_main-medium mt-4 mb-4')}>История заказов</p>
                    </NavBar>

                    <NavBar>
                        <p className={clsx(styles.text, 'text_type_main-medium mt-4 mb-4')}>Выход</p>
                    </NavBar>

                    <p className={clsx(styles.text, 'text_type_main-default mt-20')}>В этом разделе вы можете
                        изменить свои персональные данные
                    </p>
                </nav>


                <form className={styles.profileInfo}>
                    <Input type={'text'} placeholder={'Имя Марк'}/>
                    <Input type={'text'} placeholder={'Логин'}/>
                    <Input type={'password'} placeholder={'Введите новый пароль'}/>
                    <div className={styles.buttonsContainer}>
                        <Button htmlType="button" type="secondary" size="medium">
                            Отмена
                        </Button>
                        <Button htmlType="button" type="primary" size="medium" extraClass="ml-2">
                            Сохранить
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}