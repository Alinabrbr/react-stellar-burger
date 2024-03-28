import React from "react";
import styles from "../Order/Order.module.css";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Location, useLocation} from "react-router-dom";
import {TIngredient, TOrder, useAppSelector} from "../../utils/types/types";
import Price from "../Price/Price";
import clsx from "clsx";
import OrderFeedIngredient from "../OrderFeed-ingredient/OrderFeed-ingredient";
import {getCards} from "../../services/actions/actionsSelector";

type TOrderProps = {
    order: TOrder;
    priceSize: string;
    ingredients: string[];
}

export default function Order({order, priceSize, ingredients}: TOrderProps): JSX.Element {

    const location: Location = useLocation();

    const allIngredients = useAppSelector(getCards);

    const calculatePriceOrder = (
        order: TOrder,
        ingredients: TIngredient[]
    ): number => {
        let totalPrice = 0;
        order.ingredients.forEach((id) => {
            const ingredient = ingredients.find((item) => item._id === id);
            if (ingredient) {
                totalPrice += ingredient.price;
            }
        });
        return totalPrice;
    };

    return (
        <>
            <li>
                <Link className={clsx(styles.orderLink, "p-6")} to={`/profile/orders/${order._id}`} key={order._id} state={{background: location}}>
                    <div className={styles.orderHeader}>
                        <p className="text text_type_digits-default">{`#${order.number}`}</p>
                        <p className="text text_type_main-default text_color_inactive">
                            <FormattedDate date={new Date(order.createdAt)} /> i-GMT+3
                        </p>
                    </div>
                    <p className={clsx(styles.orderText, "text text_type_main-medium")}>{order.name}</p>
                    {/*{status? <p>className={"text text_type_main-medium"}>{order.status}</p> : ""} нужно выводить только в истории заказов пользователя в профиле(дописать правильное условие)*/}
                    <div className={styles.orderFooter}>
                        <div className={styles.iconsList}>
                            {
                                ingredients.slice(0, 5).map((ingredient, index) => {
                                    return (
                                            <OrderFeedIngredient
                                                key={index}
                                                ingredient={ingredient}
                                                counter={
                                                    index === 5
                                                        ? order.ingredients.length - 5
                                                        : undefined
                                                }
                                            />
                                    )
                                })
                            }

                        </div>
                        <Price price={calculatePriceOrder(order, allIngredients)} priceSize={priceSize}/>
                    </div>
                </Link>
            </li>
        </>
    )
}