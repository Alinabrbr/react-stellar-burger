import React, {useEffect} from "react";
import styles from "./app.module.css";
import Header from "../Header/Header";
import SectionBurgerConstructor from "../SectionBurgerConstructor/SectionBurgerConstructor";
import SectionBurgerIngredients from "../SectionBurgerIngredients/SectionBurgerIngredients";
import {useDispatch} from "react-redux";
import {getCard} from "../../utils/Api";
import {cardsLoaded, cardsLoadError, cardsUploading} from "../../services/cardsSlice";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardsUploading());
        getCard()
            .then(res => dispatch(cardsLoaded(res.data)))
            .catch(err => dispatch(cardsLoadError(err.message)))
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.main}>
                <SectionBurgerIngredients/>

                <SectionBurgerConstructor/>
            </main>
        </div>
    );
}

export default App;
