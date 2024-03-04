import React, {useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Navigate, NavLink} from "react-router-dom";
import styles from "../Profile/Profile.module.css"
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogoutResult} from "../../services/logoutSlice";
import {clearAccessToken} from "../../services/registerAndAuthorizationSlice";

export default function Profile () {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.accessToken.accessToken);
    const token = localStorage.getItem("refreshToken");
    const nameProfile = useSelector((state) => state.profileInfo.name);
    const emailProfile = useSelector((state) => state.profileInfo.email);


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function logout (event) {
        event.preventDefault();

        const token = localStorage.getItem("refreshToken");

        dispatch(fetchLogoutResult({token: token}));
        dispatch(clearAccessToken());
        localStorage.removeItem("refreshToken");
    }

    if (!auth && !token) {
        return (
            <Navigate to={'/login'} />
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <nav className={clsx(styles.navList, 'text_type_main-medium')}>

                    <NavLink to='/profile'>
                        <p className={'text_type_main-medium mt-4 mb-4'}>Профиль</p>
                    </NavLink>

                    <NavLink to='/'>
                        <p className={clsx(styles.text, 'text_type_main-medium mt-4 mb-4')}>История заказов</p>
                    </NavLink>

                    <NavLink onClick={logout} to='/login'>
                        <p className={clsx(styles.text, 'text_type_main-medium mt-4 mb-4')}>Выход</p>
                    </NavLink>

                    <p className={clsx(styles.text, 'text_type_main-default mt-20')}>В этом разделе вы можете
                        изменить свои персональные данные
                    </p>
                </nav>


                <form className={styles.profileInfo}>
                    <Input type={'text'} placeholder={`Имя ${nameProfile}`} value={name}
                           onChange={(event) => setName(event.target.value)}/>
                    <Input type={'text'} placeholder={'Логин'} value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <Input type={'password'} placeholder={'Введите новый пароль'} value={password}
                           onChange={(event) => setPassword(event.target.value)}/>

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