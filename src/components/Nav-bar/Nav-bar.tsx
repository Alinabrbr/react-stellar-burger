import React from "react";
import styles from "../Nav-bar/Nav-bar.module.css";
import {Link} from "react-router-dom";
import {TPropsChildren} from "../../utils/types/types";


function NavBar(props: TPropsChildren): JSX.Element {
    return (
        <Link to='/profile' className={styles.link}>
            {props.children}
        </Link>
    )
}

export default NavBar;