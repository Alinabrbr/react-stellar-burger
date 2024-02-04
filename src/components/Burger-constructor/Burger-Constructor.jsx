import React from "react";
import clsx from "clsx";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Burger-constructor/Burger-constructor.module.css";

export default function BurgerConstructor (props) {
    return (
        <div className={clsx(styles.burgerContainer, 'mt-4 ml-4')}>
            <DragIcon type="primary"/>
            <ConstructorElement text={props.name} isLocked={props.isLocked} type={props.type} thumbnail={props.image} price={props.price} />
        </div>
    )
}