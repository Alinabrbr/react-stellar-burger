import clsx from "clsx";
import styles from "../SectionBurgerIngredients/SectionBurgerIngredients.module.css";
import Container from "../Container/Container";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card";
import React from "react";
import {useSelector} from "react-redux";
import {getCards} from "../../services/cardsSelector";
import {constructorSelector} from "../../services/constructorSelector";

export default function SectionBurgerIngredients() {

    const cards = useSelector(getCards);
    const burgerConstructor = useSelector(constructorSelector);

    return (
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
            <div className={styles.cardsContainer} >
                <h2 className='text text_type_main-medium'>Булки</h2>
                <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                    {cards.map((card) => (card.type === "bun" &&
                        <Card priceSize={"default"} card={card} key={card._id}
                              count={burgerConstructor.filter(ingredient => ingredient._id === card._id).length * 2}/>))}
                </ul>

                <h2 className='text text_type_main-medium mt-10'>Соусы</h2>
                <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                    {cards.map((card) => (card.type === "sauce" &&
                        <Card priceSize={"default"} card={card} key={card._id} count={burgerConstructor.filter(ingredient => ingredient._id === card._id).length}/>))}
                </ul>
                <h2 className='text text_type_main-medium mt-10'>Начинки</h2>
                <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                    {cards.map((card) => (card.type === "main" &&
                        <Card priceSize={"default"} card={card} key={card._id} count={burgerConstructor.filter(ingredient => ingredient._id === card._id).length}/>))}
                </ul>
            </div>
        </section>
    )
}