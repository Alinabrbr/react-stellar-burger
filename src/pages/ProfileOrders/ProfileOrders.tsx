import clsx from "clsx";
import styles from "./ProfileOrders.module.css";
import React, {useEffect} from "react";
import Order from "../../components/Order/Order";
import {TOrder, useAppDispatch, useAppSelector} from "../../utils/types/types";
import {userOrdersSelector} from "../../services/actions/actionsSelector";
import {wsConnectUserOrders, wsDisconnectUserOrders} from "../../services/actions/actionsUserOrders";

export default function ProfileOrders(): JSX.Element {

    const dispatch = useAppDispatch();
    const wsUrl = "wss://norma.nomoreparties.space/orders";
    const userOrders = useAppSelector(userOrdersSelector);
    const accessToken = localStorage.getItem("accessToken");
    const orders = [...userOrders].reverse();

    useEffect(() => {
        dispatch(
            wsConnectUserOrders({
                wsUrl: `${wsUrl}?token=${accessToken?.replace("Bearer ", "")}`,
                withTokenRefresh: true,
            })
        );
        return () => {
            dispatch(wsDisconnectUserOrders());
        };
    }, [dispatch]);

    return (
        <main className={styles.main}>
            <section className={clsx(styles.section, 'pr-10, ml-4')}>
                <div className={styles.container}>
                    <ul className={clsx(styles.orders, 'mt-6')}>
                        {orders.map((order: TOrder) => (
                            <Order priceSize={"default"} order={order} key={order._id}
                                   ingredients={order.ingredients} url={"/profile/orders"} showStatus={true} />
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}