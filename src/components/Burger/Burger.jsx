import React from "react";
import clsx from "clsx";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Burger/Burger.module.css";

export default function Burger(props) {
    return (
        <div className={clsx(styles.burger, 'mr-2')}>
            <ConstructorElement text={`${props.name} (${props.lineName})`} isLocked='isLocked' type={props.type} thumbnail={props.image} price={props.price} />
        </div>
    )
}