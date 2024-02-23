import React, {useEffect} from "react";
import styles from "./app.module.css";
import Header from "../Header/Header";
import SectionBurgerConstructor from "../SectionBurgerConstructor/SectionBurgerConstructor";
import SectionBurgerIngredients from "../SectionBurgerIngredients/SectionBurgerIngredients";
import {useDispatch} from "react-redux";
import { takeCards} from "../../services/cardsSlice";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(takeCards());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <Header/>
            <DndProvider backend={HTML5Backend}>
                <main className={styles.main}>
                    <SectionBurgerIngredients/>

                    <SectionBurgerConstructor/>
                </main>
            </DndProvider>
        </div>
    );
}

export default App;
