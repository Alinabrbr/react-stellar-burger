import clsx from "clsx";
import styles from "../Header/Header.module.css";
import NavBar from "../Nav-bar/Nav-bar";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export default function Header (){
    return (
        <header className={clsx(styles.header, 'pt-4 pb-4')}>
            <div className={styles.headerContainer}>
                <div className={styles.container}>
                    <div className={styles.menuContainer}>
                        <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-5 pr-5')}>
                            <NavBar>
                                <BurgerIcon type="primary"/>
                                <p className='text text_type_main-default ml-2'>Конструктор</p>
                            </NavBar>
                        </div>

                        <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-5 pr-5')}>
                            <NavBar>
                                <ListIcon type="secondary"/>
                                <p className='text text_type_main-default text_color_inactive ml-2'>Лента
                                    заказов</p>
                            </NavBar>
                        </div>

                    </div>

                    <div className={styles.logo}>
                        <NavBar>
                            <Logo/>
                        </NavBar>
                    </div>
                </div>

                <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-5 pr-5')}>
                    <NavBar>
                        <ProfileIcon type="secondary"/>
                        <p className='text text_type_main-default text_color_inactive ml-2'>Личный
                            кабинет</p>
                    </NavBar>
                </div>
            </div>
        </header>
    )
}

