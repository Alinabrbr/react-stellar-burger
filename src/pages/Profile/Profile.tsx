import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../Profile/Profile.module.css"
import clsx from "clsx";
import {fetchLogoutResult} from "../../services/reducers/registerAndAuthorizationSlice";
import {Outlet} from "react-router-dom";
import {useAppDispatch} from "../../utils/types/types";


export default function Profile(): JSX.Element {

    const getActiveClass = ({isActive} : {isActive: boolean}) => isActive ? styles.active : styles.inactive;

    const dispatch = useAppDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <nav className={clsx(styles.navList, 'text_type_main-medium')}>

                    <NavLink className={getActiveClass} to='/profile'>
                        <p className={clsx(getActiveClass, 'text_type_main-medium mt-4 mb-4')}>Профиль</p>
                    </NavLink>

                    <NavLink className={getActiveClass} to='/profile/orders'>
                        <p className={clsx(getActiveClass, 'text_type_main-medium mt-4 mb-4')}>История заказов</p>
                    </NavLink>

                    <NavLink className={getActiveClass} onClick={() => {
                        dispatch(fetchLogoutResult())
                    }} to='/login'>
                        <p className={clsx(styles.text, getActiveClass, 'text_type_main-medium mt-4 mb-4')}>Выход</p>
                    </NavLink>

                    <p className={clsx(styles.text, styles.textOpacity, 'text_type_main-default mt-20')}>
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </nav>

                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}