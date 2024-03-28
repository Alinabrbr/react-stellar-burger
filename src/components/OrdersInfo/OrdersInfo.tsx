import React from "react";
import styles from "../OrdersInfo/OrdersInfo.module.css";
import clsx from "clsx";
import {useAppSelector} from "../../utils/types/types";
import {ordersSelector, totalSelector, totalTodaySelector} from "../../services/actions/actionsSelector";

export default function OrdersInfo(): JSX.Element {

    const orders = useAppSelector(ordersSelector);
    const total = useAppSelector(totalSelector);
    const totalToday = useAppSelector(totalTodaySelector);

    return (
        <div className={clsx(styles.ordersInfoContainer, 'pl-8 mr-4 ml-4 mt-25')}>
            <div className={styles.status}>
                <div className={styles.statusColumn}>
                    <h2 className={"text text_type_main-medium"}>Готовы:</h2>
                    <div className={clsx(styles.orderNum, styles.done, "mt-6")}>
                        {
                            orders.map(order => {
                                if (order.status === "done") {
                                    return (
                                        <p className={"text text_type_digits-default"}
                                           key={order._id}>{order.number}</p>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </div>
                <div className={styles.statusColumn}>
                    <h2 className={"text text_type_main-medium"}>В работе:</h2>
                    <div className={clsx(styles.orderNum, "mt-6")}>
                        {
                            orders.map(order => {
                                if (order.status !== "done") {
                                    return (
                                        <p className={"text text_type_digits-default"}
                                           key={order._id}>{order.number}</p>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            {
                total && (
                    <div>
                        <h2 className={"text text_type_main-medium"}>Выполнено за все время:</h2>
                        <p className={clsx(styles.ordersCount, "text text_type_digits-large")}>{total}</p>
                    </div>
                )
            }

            {
                totalToday && (
                    <div>
                        <h2 className={"text text_type_main-medium"}>Выполнено за сегодня:</h2>
                        <p className={clsx(styles.ordersCount, "text text_type_digits-large")}>{totalToday}</p>
                    </div>
                )
            }


        </div>
    )
}