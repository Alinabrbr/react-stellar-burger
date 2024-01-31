import React from "react";
import Price from "../Price/Price";
import styles from "../Card/Card.module.css";
import clsx from "clsx";

function Card(props) {
    return (
        <li className={clsx(styles.card, 'm-4')}>
            <img className={clsx(styles.image, 'mr-4 ml-4')} src={props.image} alt={props.name}/>
            <Price {...props}></Price>
            <p className='text_type_main-default'>{props.name}</p>
        </li>
    )
}

export default Card;