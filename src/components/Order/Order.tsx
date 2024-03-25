import React from "react";
import styles from "../Order/Order.module.css";
import {Link, Location, useLocation} from "react-router-dom";
import {TOrder} from "../../utils/types/types";
import Price from "../Price/Price";
import clsx from "clsx";

type TOrderProps = {
    order: TOrder;
    priceSize: string;
    ingredients: string[];
}

export default function Order({order, priceSize, ingredients}: TOrderProps): JSX.Element {

    const location: Location = useLocation();

    // function calculatePrice (order: TOrders, ingredients: string[]): number{
    //     let totalPrice = 0;
    //     order.ingredients.forEach((id: string) => {
    //         const ingredient = ingredients.find((item: string) => item._id === id);
    //         if (ingredient) {
    //             totalPrice += ingredient.price;
    //         }
    //     });
    //     return totalPrice;
    // }

    return (
        <>
            <li>
                <Link className={clsx(styles.orderLink, "p-6")} to={`/profile/orders/${order._id}`} key={order._id} state={{background: location}}>
                    <div className={styles.orderHeader}>
                        <p className="text text_type_digits-default">{`#${order.number}`}</p>
                        <p className="text text_type_main-default text_color_inactive">Дата, 17:00 15.15.1515</p>
                    </div>
                    <p className={"text text_type_main-medium"}>Название бургера</p>
                    {/*{status? <p>className={"text text_type_main-medium"}>{order.status}</p> : ""} нужно выводить только в истории заказов пользователя в профиле(дописать правильное условие)*/}
                    <div className={styles.orderFooter}>
                        <div className={styles.iconsList}>
                            {
                                ingredients.slice(0, 5).map((ingredient, index) => {
                                    return (
                                        <div key={index} className={styles.iconContainer}>
                                            {/*<img alt={ingredient.name} src={ingredient.image} className={styles.icon}></img>*/}
                                            <img alt="dfdgf" src="../../images/icon-modal-done.png"></img>
                                        </div>
                                    )
                                })
                            }
                            {
                                ingredients.length > 5 && (
                                    <div className={clsx(styles.iconContainer, styles.count)}>
                                        <img alt="количество остальных ингредиентов" src={"https://code.s3.yandex.net/react/code/cheese.png"}
                                             className={styles.icon}></img>
                                        <p className={clsx(styles.countText, "text text_type_main-default")}>{`+${ingredients.length - 5}`}</p>
                                    </div>
                                )
                            }

                        </div>
                        <Price price={252} priceSize={priceSize}/>
                    </div>
                </Link>
            </li>
        </>
    )
}