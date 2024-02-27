import React from "react";
import styles from './Order-details.module.css';
import imgIcon from '../../images/icon-modal-done.png';
import clsx from "clsx";
import {useSelector} from "react-redux";

export default function OrderDetails() {

    const {order, loading, error} = useSelector(state => state.orderDetails);

    return (
            <div className={clsx(styles.modalContainer, 'mt-20 mb-15')}>
                {loading || error ? (
                    <p className="text text_type_digits-default mt-14">{loading ? 'Загружаем номера заказа' : `Произошла ошибка: ${error}`}</p>
                ) : (
                    <p className="text text_type_digits-large mt-14">{order.order.number}</p>
                )}
                <p className='text_type_main-medium mt-8'>идентификатор заказа</p>
                <img className='mt-15 mb-15' src={imgIcon} alt='Ваш заказ начали готовить'></img>
                <p className='text_type_main-default mb-2'>Ваш заказ начали готовить</p>
                <p className='text_type_main-default textColor'>Дождитесь готовности на орбитальной станции</p>
            </div>
    )
}