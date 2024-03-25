import clsx from "clsx";
import styles from "./OrderFeed.module.css";
import React from "react";
import Order from "../../components/Order/Order";
import OrdersInfo from "../../components/OrdersInfo/OrdersInfo";
import {TOrder} from "../../utils/types/types";

export default function OrderFeed(): JSX.Element {

    const orderRequestInfo = {
        "success": true,
        "orders": [
            {
                "ingredients": [
                    "60d3463f7034a000269f45e7",
                    "60d3463f7034a000269f45e9",
                    "60d3463f7034a000269f45e8",
                    "60d3463f7034a000269f45ea"
                ],
                "_id": "1",
                "status": "not",
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
                "_id": "2",
                "status": "not",
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
                "_id": "3",
                "status": "not",
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
                "_id": "4",
                "status": "not",
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
                "status": "not",
                "number": 0,
                "createdAt": "2021-06-23T14:43:22.587Z",
                "updatedAt": "2021-06-23T14:43:22.603Z"
            }
        ],
        "total": 1,
        "totalToday": 1
    }

    return (
        <main className={styles.main}>
            <section className={clsx(styles.sectionOrders, 'pr-10, ml-4')}>
                <h1 className='text text_type_main-large mt-10 mb-5'>Лента заказов</h1>
                <div className={styles.ordersContainer}>
                    <ul className={clsx(styles.orders, 'mt-6')}>
                        {orderRequestInfo.orders.map((order: TOrder) => (
                            <Order priceSize={"default"} order={order} key={order._id}
                                   ingredients={order.ingredients}/>
                        ))}
                    </ul>
                </div>
            </section>
            <section className={clsx(styles.sectionOrdersInfo, 'mr-10')}>
                    <OrdersInfo/>
            </section>
        </main>
    )
}