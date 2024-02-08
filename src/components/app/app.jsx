import React, {useState, useEffect} from "react";
import styles from "./app.module.css";
import Header from "../Header/Header";
import SectionBurgerConstructor from "../SectionBurgerConstructor/SectionBurgerConstructor";
import SectionBurgerIngredients from "../SectionBurgerIngredients/SectionBurgerIngredients";

function App() {
    const [cards, setCards] = useState([]);

    const getCard = () => {
        fetch('https://norma.nomoreparties.space/api/ingredients')
            .then((res) => res.ok ? res.json() : Promise.reject(new Error('Отклонено')))
            .then((data) => setCards(data.data))
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        getCard()
    }, []);

    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.main}>
                <SectionBurgerIngredients cards={cards}/>

                <SectionBurgerConstructor cards={cards}/>
            </main>
        </div>
    );
}

export default App;
