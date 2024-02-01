import React from "react";
import Price from "../Price/Price";
import styles from "../Card/Card.module.css";
import clsx from "clsx";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";

function Card(props) {
    return (
        <li className={clsx(styles.card, 'mr-4 mb-4 ml-4')}>
            <div className={styles.counter}>
                <Counter count={1} size="default"/>
            </div>
            <img className='mr-4 ml-4' src={props.image} alt={props.name}/>
            <Price {...props}></Price>
            <p className='text_type_main-default '>{props.name}</p>
        </li>
    )
}

export default Card;