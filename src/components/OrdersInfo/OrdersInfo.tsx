import React from "react";
import styles from "../OrdersInfo/OrdersInfo.module.css";
import clsx from "clsx";

export default function OrdersInfo(): JSX.Element {

    const orders = [
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "inProgress",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        },
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "inProgress",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        },
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "inProgress",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        },
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "inProgress",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        },
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "inProgress",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        }, {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "inProgress",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        }, {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "",
            "status": "done",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        },
        {
            "ingredients": [
                "60d3463f7034a000269f45e7",
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e8",
                "60d3463f7034a000269f45ea"
            ],
            "_id": "5",
            "status": "done",
            "number": 0,
            "createdAt": "2021-06-23T14:43:22.587Z",
            "updatedAt": "2021-06-23T14:43:22.603Z"
        }
    ]

    const total = 10;

    const totalToday = 200;

    // const orders = useAppSelector(ordersSelector);
    // const total = useAppSelector(totalSelector);
    // const totalToday = useAppSelector(totalTodaySelector);

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