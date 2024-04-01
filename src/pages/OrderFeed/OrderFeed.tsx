import clsx from "clsx";
import styles from "./OrderFeed.module.css";
import React, {useEffect} from "react";
import Order from "../../components/Order/Order";
import OrdersInfo from "../../components/OrdersInfo/OrdersInfo";
import {useAppDispatch, useAppSelector} from "../../utils/types/types";
import {wsConnectOrderFeed, wsDisconnectOrderFeed} from "../../services/actions/actionsFeed";
import {ordersSelector} from "../../services/actions/actionsSelector";

export default function OrderFeed(): JSX.Element {
    const dispatch = useAppDispatch();
    const wsUrl = "wss://norma.nomoreparties.space/orders/all";
    const orders = useAppSelector(ordersSelector);

    useEffect(() => {
        dispatch(
            wsConnectOrderFeed({
                wsUrl: wsUrl,
                withTokenRefresh: true,
            })
        );
        return () => {
            dispatch(wsDisconnectOrderFeed());
        };
    }, [dispatch]);

    return (
        <main className={styles.main}>
            <section className={clsx(styles.sectionOrders, 'pr-10, ml-4')}>
                <h1 className='text text_type_main-large mt-10 mb-5'>Лента заказов</h1>
                <div className={styles.ordersContainer}>
                    <ul className={clsx(styles.orders, 'mt-6')}>
                        {orders.map((order) => (
                            <Order priceSize={"default"} order={order} key={order._id}
                                   ingredients={order.ingredients} url={"/feed"}/>
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