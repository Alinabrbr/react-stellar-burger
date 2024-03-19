import React from "react";
import clsx from "clsx";
import styles from "./Price.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

type TPriceProps = {
    price: number;
    priceSize: string;
}

function Price(props: TPriceProps): JSX.Element {
    return (
        <div className= {clsx(styles.price)}>
            <p className={clsx('mr-2', props.priceSize === "default" ? 'text_type_digits-default' : 'text_type_digits-medium')}>{props.price}</p>
            <CurrencyIcon type="primary"/>
        </div>
    )
}

export default Price;

Price.propTypes = {
    price: PropTypes.number,
    priceSize: PropTypes.string
}