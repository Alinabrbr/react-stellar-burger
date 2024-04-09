import clsx from "clsx";
import styles from "./Layout-header.module.css";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function LayoutHeader(): JSX.Element {

    const getActiveClass = ({isActive}: {isActive: boolean})=> isActive ? styles.active : styles.inactive;

    return (
        <>
            <header className={clsx(styles.header, 'pt-4 pb-4')}>
                <div className={styles.headerContainer}>
                    <div className={styles.container}>
                        <div className={styles.menuContainer}>
                            <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-5 pr-5')}>
                                <NavLink className={getActiveClass} to='/'>
                                    <BurgerIcon type="primary"/>
                                    <p className='text text_type_main-default ml-2'>Конструктор</p>
                                </NavLink>
                            </div>

                            <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-5 pr-5')}>
                                <NavLink className={getActiveClass} to='/feed'>
                                    <ListIcon type="secondary"/>
                                    <p className='text text_type_main-default ml-2'>Лента
                                        заказов</p>
                                </NavLink>
                            </div>

                        </div>

                        <div className={styles.logo}>
                            <NavLink className={getActiveClass} to='/'>
                                <Logo/>
                            </NavLink>
                        </div>
                    </div>

                    <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-5 pr-5')}>
                        <NavLink className={getActiveClass} to='/profile'>
                            <ProfileIcon type="secondary"/>
                            <p className='text text_type_main-default ml-2'>Личный
                                кабинет</p>
                        </NavLink>
                    </div>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

