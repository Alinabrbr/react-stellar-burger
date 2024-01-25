import React from "react";
import styles from "./app.module.css";
import { data } from "../../utils/data";
import {BurgerIcon, Logo, ListIcon, ProfileIcon, CurrencyIcon, Button, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import NavBar from "../nav-bar/nav-bar";
import Container from "../container/container";

function App() {
  return (
    <div className={styles.app}>
        <header className={clsx(styles.header, 'pt-4 pb-4')}>
            <div className={styles.headerContainer}>
                <div className={styles.menuContainer}>
                    <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-4 pr-4')}>
                        <NavBar>
                            <BurgerIcon className={styles.border} type="primary"/>
                            <p className={clsx(styles.border, 'text text_type_main-default ml-2')}>Конструктор</p>
                        </NavBar>
                    </div>

                    <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-4 pr-4')}>
                        <NavBar>
                            <ListIcon type="secondary" />
                            <p className={clsx(styles.border, 'text text_type_main-default ml-2')}>Лента заказов</p>
                        </NavBar>
                    </div>

                </div>

                <div>
                    <NavBar>
                        <Logo/>
                    </NavBar>
                </div>

                <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-4 pr-4')}>
                    <NavBar>
                        <ProfileIcon type="primary" />
                        <p className={clsx(styles.border, 'text text_type_main-default ml-2')}>Личный кабинет</p>
                    </NavBar>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <section className={clsx(styles.burgerIngredients, 'mr-10')}>
                <h1 className={clsx(styles.border,'text text_type_main-large mt-10')}>Соберите бургер</h1>
                <div className={clsx(styles.tabs, 'mt-5')}>
                    <Container>
                        <Tab>Булки</Tab>
                    </Container>
                    <Container>
                        <Tab>Соусы</Tab>
                    </Container>
                    <Container>
                        <Tab>Начинки</Tab>
                    </Container>
                </div>
                <div className='cards'>
                    <h2 className={clsx(styles.border, 'text text_type_main-medium mt-10')}>Булки</h2>
                    <div className='card'>

                    </div>
                </div>
                <h2 className={clsx(styles.border,'text text_type_main-medium mt-10')}>Соусы</h2>
                <h2 className={clsx(styles.border, 'text text_type_main-medium mt-10')}>Начинки</h2>
            </section>

            <section className='burgerConstructor'>
                <div>

                </div>
                <div className={styles.price}>
                    <div className="mt-25">
                        <p>610</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
