import React from "react";
import clsx from "clsx";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Burger-constructor/Burger-constructor.module.css";
import PropTypes from 'prop-types';

export default function BurgerConstructor (props) {
    return (
        <div className={clsx(styles.burgerContainer, 'mt-4 ml-4')}>
            <DragIcon type="primary"/>
            <ConstructorElement text={props.name} isLocked={props.isLocked} thumbnail={props.image} price={props.price} />
        </div>
    )
}

BurgerConstructor.propTypes = {
    name: PropTypes.string,
    isLocked: PropTypes.bool,
    image: PropTypes.string,
    price: PropTypes.number
};