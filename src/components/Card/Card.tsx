import React from "react";
import Price from "../Price/Price";
import styles from "../Card/Card.module.css";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {TIngredient} from "../../utils/types";

type TCardProps = {
    card: TIngredient;
    priceSize: string;
    count: number;
}

export default function Card({card, priceSize, count}: TCardProps): JSX.Element {

    const location = useLocation();

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: card,
    });

    return (
        <>
            <li>
                <Link className={styles.card} to={`/ingredients/${card._id}`} state={{background: location}}
                      key={card._id} ref={dragRef}>
                    <div className={styles.counter}>
                        <Counter count={count} size="default"/>
                    </div>
                    <img className='mr-4 ml-4' src={card.image} alt={card.name}/>
                    <Price price={card.price} priceSize={priceSize}></Price>
                    <p className='text_type_main-default'>{card.name}</p>
                </Link>
            </li>
        </>
    )
}