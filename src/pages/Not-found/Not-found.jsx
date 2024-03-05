import React from "react";
import styles from "./Not-found.module.css"
import clsx from "clsx";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h2 className={clsx(styles.textError, "text text_type_main-large mt-14")}>Ошибка</h2>
            <p className={clsx(styles.textError, "text text_type_digits-large mt-14")}>404</p>
        </div>
    )
}