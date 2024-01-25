import React from "react";
import styles from "../app/app.module.css";

function NavBar (props) {
    return(
        <a className={styles.link} href="https://code.s3.yandex.net/react/code/bun-02.png">
            {props.children}
        </a>
    )
}

export default NavBar;