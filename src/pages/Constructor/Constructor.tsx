import React from "react";
import styles from "../../pages/Constructor/Constructor.module.css";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

export default function Constructor(): JSX.Element {
    return (
        <main className={styles.main}>
            <BurgerIngredients/>

            <BurgerConstructor/>
        </main>
    )
}