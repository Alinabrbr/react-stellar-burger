import React from "react";
import styles from "../app/app.module.css";

function Container (props) {
    return (
        <div className={styles.border_type_dashed}>
            {props.children}
        </div>
    )
}

export default Container;