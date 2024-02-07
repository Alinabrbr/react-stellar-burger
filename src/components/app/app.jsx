import React, {useState, useEffect} from "react";
import styles from "./app.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import Container from "../Container/Container";
import Card from "../Card/Card";
import Header from "../Header/Header";
import SectionBurgerConstructor from "../SectionBurgerConstructor/SectionBurgerConstructor";

 function App() {
     const [cards, setCards] = useState([]);

     const getCard = () => {
         fetch('https://norma.nomoreparties.space/api/ingredients')
             .then((res) => res.json())
             .then((data) => setCards(data.data))
             .catch((err) => {console.log(err)});
     }

    useEffect(() => {
        getCard()
    }, []);

    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.main}>
                <section className={clsx(styles.burgerIngredients, 'mr-10')}>
                    <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
                    <div className={clsx(styles.tabs, 'mt-5 mb-10')}>
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
                        <h2 className='text text_type_main-medium'>Булки</h2>
                        <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                            {cards.map((card) => (
                                card.type === "bun" && <Card card={card} key={card._id}/>
                            ))}
                        </ul>

                        <h2 className='text text_type_main-medium mt-10'>Соусы</h2>
                        <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                            {cards.map((card) => (
                                card.type === "sauce" && <Card priceSize={"default"} card={card} key={card._id}/>
                            ))}
                        </ul>
                        <h2 className='text text_type_main-medium mt-10'>Начинки</h2>
                        <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                            {cards.map((card) => (
                                card.type === "main" && <Card  priceSize={"default"} card={card} key={card._id}/>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className={clsx(styles.burgerConstructor, 'mt-25')}>
                    <SectionBurgerConstructor cards={cards}/>
                </section>
            </main>
        </div>
    );
}

export default App;
