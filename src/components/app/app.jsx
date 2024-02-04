import React, {useState, useEffect} from "react";
import styles from "./app.module.css";
import {
    BurgerIcon,
    Logo,
    ListIcon,
    ProfileIcon,
    Button,
    Tab
} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import NavBar from "../Nav-bar/Nav-bar";
import Container from "../Container/Container";
import Card from "../Card/Card";
import Price from "../Price/Price";
import BurgerConstructor from "../Burger-constructor/Burger-Constructor";
import IngredientDetails from "../Ingredient-details/Ingredient-details";
import modalState from "../../hooks/use-modal/useModal";
import closeModal from "../../hooks/use-modal/useModal";
import ModalOverlay from "../Modal-overlay/Modal-overlay";

function App() {
    const API = 'https://norma.nomoreparties.space/api/ingredients';
    const [cards, setCards] = useState([]);
    const getCard = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCards(data.data))
            .catch((err) => {console.log(err)});
    }

    useEffect(() => {
        getCard();
    }, []);

    return (
        <div className={styles.app}>
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
            <main className={styles.main}>
                <section className={clsx(styles.burgerIngredients, 'mr-10')}>
                    <h1 className='text text_type_main-large mt-10'>Соберите
                        бургер</h1>
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
                                card.type === "bun" && <Card priceSize={"default"} {...card} key={card._id}/>
                            ))}
                        </ul>

                        <h2 className='text text_type_main-medium mt-10'>Соусы</h2>
                        <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                            {cards.map((card) => (
                                card.type === "sauce" && <Card priceSize={"default"} {...card} key={card._id}/>
                            ))}
                        </ul>
                        <h2 className='text text_type_main-medium mt-10'>Начинки</h2>
                        <ul className={clsx(styles.cards, 'mt-6 ml-4')}>
                            {cards.map((card) => (
                                card.type === "main" && <Card priceSize={"default"} {...card} key={card._id}/>
                            ))}
                        </ul>
                    </div>
                    {modalState && <ModalOverlay onClick={closeModal}><IngredientDetails/></ModalOverlay>}
                </section>

                <section className={clsx(styles.burgerConstructor, 'mt-25')}>
                    {cards.map((card) => (
                    card.type === 'bun' && <BurgerConstructor {...card} isLocked={true} key={card._id}/>
                    ))}


                    <div className={clsx(styles.burgerIngredientsContainer, 'mb-4')}>
                        {cards.map((card) => (
                            card.type === 'main' && <BurgerConstructor {...card} key={card._id}/>
                        ))}
                    </div>

                    {cards.map((card) => (
                        card.type === 'bun' && <BurgerConstructor {...card} isLocked={true} type={"bottom"} key={card._id}/>
                    ))}

                    <div className={clsx(styles.priceContainer, 'mt-10')}>
                        <Price priceSize={"medium"} price={610}/>
                        <Button htmlType="button" type="primary" size="large" >Оформить заказ</Button>
                    </div>
                    {/*<OrderDetails></OrderDetails>*/}
                </section>
            </main>
        </div>
    );
}

export default App;
