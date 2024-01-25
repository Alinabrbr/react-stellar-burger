import React from "react";
import styles from "./app.module.css";
import { data } from "../../utils/data";
import {BurgerIcon, Logo, ListIcon, ProfileIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import NavBar from "../nav-bar/nav-bar";

function App() {
  return (
    <div className={styles.app}>
        <header className={clsx(styles.header, 'pt-4','pb-4')}>
            <div className={styles.headerContainer}>
                <div className={styles.menuContainer}>
                    <div className={clsx(styles.navContainer, 'pt-4','pb-4','pl-4', 'pr-4')}>
                        <NavBar>
                            <BurgerIcon className={styles.linkBorder} type="primary"/>
                            <p className={clsx(styles.linkBorder, 'text', 'text_type_main-default', 'ml-2')}>Конструктор</p>
                        </NavBar>
                    </div>

                    <div className={clsx(styles.navContainer, 'pt-4','pb-4','pl-4', 'pr-4')}>
                        <NavBar>
                            <ListIcon type="secondary" />
                            <p className={clsx(styles.linkBorder, 'text', 'text_type_main-default', 'ml-2')}>Лента заказов</p>
                        </NavBar>
                    </div>

                </div>

                <div>
                    <NavBar>
                        <Logo/>
                    </NavBar>
                </div>

                <div className={clsx(styles.navContainer, 'pt-4','pb-4','pl-4', 'pr-4')}>
                    <NavBar>
                        <ProfileIcon type="primary" />
                        <p className={clsx(styles.linkBorder, 'text', 'text_type_main-default', 'ml-2')}>Личный кабинет</p>
                    </NavBar>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <section className={clsx(styles.burgerIngredients, 'mr-10')}>
                <h1 className="text text_type_main-large">Соберите бургер</h1>
                <ul>
                    <li className="text text_type_main-default">Булки</li>
                    <li className="text text_type_main-default">Соусы</li>
                    <li className="text text_type_main-default">Начинки</li>
                </ul>
                <div className='cards'>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <div className='card'>

                    </div>
                </div>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <h2 className="text text_type_main-medium">Начинки</h2>
            </section>

            <section className='burgerConstructor'>
                <div className='price'>
                    <p>610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <button>Оформить заказ</button>
            </section>
        </main>
    </div>
  );
}

export default App;
