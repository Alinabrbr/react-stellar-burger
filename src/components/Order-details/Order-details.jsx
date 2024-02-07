import React from "react";
import styles from './Order-details.module.css'

export default function OrderDetails() {

    return (
            <div className={styles.container}>
                <h2 className='text_type_main-large'>034536</h2>
                <p className='text_type_main-medium mt-4 mb-8'>идентификатор заказа</p>
                <div className={styles.iconModalDone}></div>
                <p className='text_type_main-default'>Ваш заказ начали готовить</p>
                <p className='text_type_digits-default'>Дождитесь готовности на орбитальной станции</p>
            </div>
    )
}