import React from "react";
import styles from "../Nav-bar/Nav-bar.module.css";
import PropTypes from "prop-types";

function NavBar(props) {
    return (
        <a className={styles.link} href="#">
            {props.children}
        </a>
    )
}

export default NavBar;

NavBar.propTypes = {
    children: PropTypes.node,
}