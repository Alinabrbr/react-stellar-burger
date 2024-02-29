import React from "react";
import styles from "../Nav-bar/Nav-bar.module.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <Link to='/profile' className={styles.link}>
            {props.children}
        </Link>
    )
}

export default NavBar;

NavBar.propTypes = {
    children: PropTypes.node,
}