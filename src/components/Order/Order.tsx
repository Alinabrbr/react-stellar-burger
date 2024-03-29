import React from "react";
import styles from "../Order/Order.module.css";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Location, useLocation} from "react-router-dom";
import {TOrder, useAppSelector} from "../../utils/types/types";
import Price from "../Price/Price";
import clsx from "clsx";
import OrderFeedIngredient from "../OrderFeed-ingredient/OrderFeed-ingredient";
import {getCards} from "../../services/actions/actionsSelector";
import {calculatePriceOrder} from "../../utils/functions";

type TOrderProps = {
    order: TOrder;
    priceSize: string;
    ingredients: string[];
    showStatus?: boolean;
    url: string;
}

export default function Order({order, priceSize, ingredients, url, showStatus = false}: TOrderProps): JSX.Element {

    const location: Location = useLocation();

    const allIngredients = useAppSelector(getCards);

    return (
        <>
            <li className={styles.order}>
                <Link className={clsx(styles.orderLink, "p-6")} to={`${url}/${order._id}`} key={order._id} state={{background: location}}>
                    <div className={styles.orderHeader}>
                        <p className="text text_type_digits-default">{`#${order.number}`}</p>
                        <p className="text text_type_main-default text_color_inactive">
                            <FormattedDate date={new Date(order.createdAt)} /> i-GMT+3
                        </p>
                    </div>
                    <span>
                        <p className={clsx(styles.orderText, "text text_type_main-medium")}>{order.name}</p>
                        {showStatus ? (
                            <p className={`${styles.order__status} text text_type_main-default mt-2`}
                                style={{ color: order.status === "done" ? "#0CC" : "" }}
                            >
                                {order.status === "done" ? "Выполнен" : "Готовится"}
                            </p>
                        ) : null}
                    </span>
                    <div className={styles.orderFooter}>
                        <div className={styles.iconsList}>
                            {
                                ingredients.slice(0, 6).map((ingredient, index) => (
                                    <OrderFeedIngredient
                                        key={index}
                                        ingredient={ingredient}
                                        counter={
                                            index === 5
                                                ? ingredients.length - 5
                                                : undefined
                                        }
                                    />
                                ))
                            }
                        </div>
                        <Price price={calculatePriceOrder(order, allIngredients)} priceSize={priceSize}/>
                    </div>
                </Link>
            </li>
        </>
    )
}