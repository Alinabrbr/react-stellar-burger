import {useAppDispatch, useAppSelector} from "../../utils/types/types";
import {getCards, orderInfoSelector} from "../../services/actions/actionsSelector";
import {useParams} from "react-router-dom";
import styles from "../Order-id/Order-id.module.css";
import React, {useEffect} from "react";
import clsx from "clsx";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {calculatePriceOrder, getStatus} from "../../utils/functions";
import {collectOrderIngredients} from "../../utils/api";
import {fetchOrderInfo} from "../../services/reducers/orderIdInfoSlice";

export default function OrderId() {
    const dispatch = useAppDispatch();
    const order = useAppSelector(orderInfoSelector);
    const {id} = useParams<{ id: string }>();

    const ingredients = useAppSelector(getCards);

    useEffect(() => {
        if (id) {
            dispatch(fetchOrderInfo(id));
        }
    }, [dispatch])

    if (!order) {
        return <>
            <h2 className='text_type_main-default title'>Order details is loading...</h2>
        </>
    }

    const date = new Date(order.createdAt);
    const timeZone = date.getTimezoneOffset() * (-1) / 60;

    let orderIngredients = collectOrderIngredients(order, ingredients)
        .filter((ingredient, index, ingredients) => {
            return ingredients.indexOf(ingredient) === index;
        });
    let totalPrice = calculatePriceOrder(order, ingredients);
    const status = getStatus(order);

    return (
        <div className={styles.container}>
            <p className={clsx(styles.number, "text text_type_digits-default")}>{`#${order.number}`}</p>
            <div className={styles.containerOrder}>
                <h3 className={"text text_type_main-medium mt-10 mb-3"}>{order.name}</h3>
                <p className={clsx("text text_type_main-default mb-15",
                    order?.status === "done"
                        ? styles.statusDone
                        : {color: "#FFF"}
                )
                }>
                    {
                        status
                    }
                </p>
                <p className="text text_type_main-medium mb-6">Состав:</p>
                <ul className={styles.ingredients}>
                    {
                        orderIngredients.map(ingredient => {
                            let count = order.ingredients?.filter(element => element === ingredient._id).length;
                            return (
                                <li className={clsx(styles.ingredient, "mr-6")} key={ingredient._id}>
                                    <div className={styles.info}>
                                        <div className={clsx(styles.iconContainer, "mr-4")}>
                                            <img alt={ingredient.name} src={ingredient.image}
                                                 className={styles.icon}></img>
                                        </div>
                                        <p className="text text_type_main-default">{ingredient.name}</p>
                                    </div>
                                    <p className={`${styles.price} text text_type_digits-default`}>
                                        {`${count} x ${ingredient.price}`}
                                        <CurrencyIcon type='primary'/>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={clsx(styles.total, "mt-10")}>
                    <div>
                        <FormattedDate date={date} className={"text text_type_main-default text_color_inactive"}/>
                        <span
                            className={"text text_type_main-default text_color_inactive"}>{` i-GMT+${timeZone}`}</span>
                    </div>
                    <div className={styles.price}>
                        <p className="text text_type_digits-default mr-2">{totalPrice}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}