import React, {useEffect} from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/cardsSlice";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <Header/>
            <DndProvider backend={HTML5Backend}>
                <main className={styles.main}>
                    <BurgerIngredients/>

                    <BurgerConstructor/>
                </main>
            </DndProvider>
        </div>
    );
}

export default App;
