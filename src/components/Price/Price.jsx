import React from "react";
import clsx from "clsx";
import styles from "./Price.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Price(props) {
    console.log(props);
    return (
        <div className= {clsx(styles.price)}>
            <p className={clsx('mr-2', props.priceSize === "default" ? 'text_type_digits-default' : 'text_type_digits-medium')}>{props.price}</p>
            <CurrencyIcon className={clsx('mr-2', props.priceType === "ingredients" ? '.border_type_dashed' : '')} type="primary"/>
        </div>
    )
}

export default Price;