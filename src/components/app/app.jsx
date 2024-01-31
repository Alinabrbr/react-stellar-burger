import React, {useState, useEffect} from "react";
import styles from "./app.module.css";
import {BurgerIcon, Logo, ListIcon, ProfileIcon, Button, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import NavBar from "../Nav-bar/Nav-bar";
import Container from "../Container/Container";
import Card from "../Card/Card";
import Price from "../Price/Price";

function App() {
    const [cards, setCards] = useState([]);
    const getCard = () => {
        fetch('https://norma.nomoreparties.space/api/ingredients')
            .then((res) => res.json())
            .then((data) => setCards(data.data));
    }

    useEffect(() => {
        getCard();
    }, []);

    return (
        <div className={styles.app}>
            <header className={clsx(styles.header, 'pt-4 pb-4')}>
                <div className={styles.headerContainer}>
                    <div className={styles.menuContainer}>
                        <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-4 pr-4')}>
                            <NavBar>
                                <BurgerIcon  type="primary"/>
                                <p className= 'text text_type_main-default ml-2'>Конструктор</p>
                            </NavBar>
                        </div>

                        <div className={clsx(styles.navContainer, 'pt-4 pb-4 pl-4 pr-4')}>
                            <NavBar>
                                <ListIcon type="secondary"/>
                                <p className= 'text text_type_main-default ml-2'>Лента
                                    заказов</p>
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
                            <ProfileIcon type="primary"/>
                            <p className='text text_type_main-default ml-2'>Личный
                                кабинет</p>
                        </NavBar>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <section className={clsx(styles.burgerIngredients, 'mr-10')}>
                    <h1 className='text text_type_main-large mt-10'>Соберите
                        бургер</h1>
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
                    <div className={styles.cardsContainer}>
                        <h2 className='text text_type_main-medium mt-10'>Булки</h2>
                        <ul className={styles.cards}>
                            {cards.map((card) => (
                                card.type === "bun" && <Card priceSize={"default"} {...card} key={card._id}/>
                            ))}
                        </ul>

                        <h2 className='text text_type_main-medium mt-10'>Соусы</h2>
                        <ul className={styles.cards}>
                            {cards.map((card) => (
                                card.type === "sauce" && <Card priceSize={"default"} {...card} key={card._id}/>
                            ))}
                        </ul>
                        <h2 className='text text_type_main-medium mt-10'>Начинки</h2>
                        <ul className={styles.cards}>
                            {cards.map((card) => (
                                card.type === "main" && <Card priceSize={"default"} {...card} key={card._id}/>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={styles.burgerConstructor}>
                    <div>

                    </div>

                    <div className={styles.priceContainer}>
                        <Price priceSize={"medium"}/>
                        <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
