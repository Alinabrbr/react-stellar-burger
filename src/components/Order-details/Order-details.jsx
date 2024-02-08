import React from "react";
import styles from './Order-details.module.css';
import imgIcon from '../../images/icon-modal-done.png';
import clsx from "clsx";

export default function OrderDetails() {

    return (
            <div className={clsx(styles.modalContainer, 'mt-20 mb-15')}>
                <h2 className={clsx(styles.textEffect,'text_type_digits-large')}>034536</h2>
                <p className='text_type_main-medium mt-8'>идентификатор заказа</p>
                <img className='mt-15 mb-15' src={imgIcon} alt='Ваш заказ начали готовить'></img>
                <p className='text_type_main-default mb-2'>Ваш заказ начали готовить</p>
                <p className='text_type_main-default textColor'>Дождитесь готовности на орбитальной станции</p>
            </div>
    )
}