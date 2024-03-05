import React, {useEffect, useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Navigate, NavLink} from "react-router-dom";
import styles from "../Profile/Profile.module.css"
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogoutResult} from "../../services/logoutSlice";
import {clearAccessToken, fetchRefreshTokenResult} from "../../services/registerAndAuthorizationSlice";
import {fetchEditInfoProfileResult, fetchInfoProfileResult} from "../../services/getInfoProfileSlice";


export default function Profile() {

    const getActiveClass = ({isActive})=> isActive ? styles.active : styles.inactive;

    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.accessToken.accessToken);
    const refreshToken = localStorage.getItem("refreshToken");

    useEffect(() => {
        if (!accessToken && refreshToken) {
            dispatch(fetchRefreshTokenResult({token: refreshToken}));
        }
    }, [dispatch])

    const profileInfo = useSelector((state) => state.profileInfo);

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchInfoProfileResult(accessToken));
        }
    }, [dispatch, accessToken])

    // Если accessToken протух
    if (profileInfo.error) {
        dispatch(clearAccessToken());
    }

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })

    useEffect(() => {
        setForm({
            name: profileInfo.name,
            email: profileInfo.email,
            password: "",
        })
    }, [profileInfo])

    function logout(event) {
        event.preventDefault();

        dispatch(fetchLogoutResult({token: refreshToken}));
        localStorage.removeItem("refreshToken");
        dispatch(clearAccessToken());
    }

    function editProfile(event) {
        event.preventDefault();
        console.log(form);
        dispatch(fetchEditInfoProfileResult({
            token: accessToken,
            name: form.name,
            email: form.email,
            password: form.password
        }));
    }

    function editCancel(event) {
        event.preventDefault();
        setForm({
            name: profileInfo.name,
            email: profileInfo.email,
            password: "",
        });
    }

    const updateInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    if (!accessToken && !refreshToken) {
        return (
            <Navigate to={'/login'}/>
        )
    }

    const onIconClick = (event) => {
        event.target.parentElement.disabled = false;
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <nav className={clsx(styles.navList, 'text_type_main-medium')}>

                    <NavLink className={getActiveClass} to='/profile'>
                        <p className={'text_type_main-medium mt-4 mb-4'}>Профиль</p>
                    </NavLink>

                    <NavLink className={getActiveClass} to='/'>
                        <p className={clsx(styles.text, 'text_type_main-medium mt-4 mb-4')}>История заказов</p>
                    </NavLink>

                    <NavLink className={getActiveClass} onClick={logout} to='/login'>
                        <p className={clsx(styles.text, 'text_type_main-medium mt-4 mb-4')}>Выход</p>
                    </NavLink>

                    <p className={clsx(styles.text, styles.textOpacity, 'text_type_main-default mt-20')}>В этом разделе вы можете
                        изменить свои персональные данные
                    </p>
                </nav>


                {profileInfo.isLoading ?
                    <h1 className={clsx(styles.text, 'text_type_main-medium')}>Данные загружаются...</h1>
                    : <form className={styles.profileInfo} onSubmit={editProfile}>
                        <Input extraClass={styles.input} name="name" type={'text'} placeholder={'Имя'} value={form.name}
                               onChange={updateInput}
                               icon="EditIcon"
                               onIconClick={e => {
                                   onIconClick(e)
                               }}
                               disabled={true}
                        />
                        <Input name="email" type={'text'} placeholder={'Логин'} value={form.email}
                               onChange={updateInput}
                               disabled={profileInfo.isLoading}
                               icon="EditIcon"
                        />
                        <Input name="password" type={'password'} placeholder={'Введите новый пароль'} value={form.password}
                               onChange={updateInput}
                               disabled={profileInfo.isLoading}
                               icon="EditIcon"
                        />

                        <div className={styles.buttonsContainer}>
                            <Button htmlType="button" type="secondary" size="medium" onClick={editCancel}>
                                Отмена
                            </Button>
                            <Button htmlType="button" type="primary" size="medium" extraClass="ml-2">
                                Сохранить
                            </Button>
                        </div>
                    </form>}
            </div>

        </div>
    )
}