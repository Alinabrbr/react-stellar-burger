import React from "react";
import styles from "../app/app.module.css";

function Container (props) {
    return (
        <div className={styles.border}>
            {props.children}
        </div>
    )
}

export default Container;