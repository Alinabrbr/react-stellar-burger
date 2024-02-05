import React from "react";
import styles from "../Nav-bar/Nav-bar.module.css";

function NavBar (props) {
    return(
        <a className={styles.link} href="#">
            {props.children}
        </a>
    )
}

export default NavBar;