import React from "react";
import styles from "../app/app.module.css";

function NavBar (props) {
    return(
        <a className={styles.link} href="#">
            {props.children}
        </a>
    )
}

export default NavBar;