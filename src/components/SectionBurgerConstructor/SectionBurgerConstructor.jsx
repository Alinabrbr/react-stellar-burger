import React from "react";
import BurgerConstructor from "../Burger-constructor/Burger-Constructor";
import clsx from "clsx";
import styles from "../SectionBurgerConstructor/SectionBurgerConstructor.module.css";
import Price from "../Price/Price";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Order-details/Order-details";
import useModal from "../../hooks/useModal";
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../services/actions/card";
import {closePopup, openPopup} from "../../services/constructorSlice";
import {getModalOrderSelector} from "../../services/getModalOrderSelector";

export default function SectionBurgerConstructor (){

    const cards = useSelector(getCards);

    // const {isModalState, openModal, closeModal} = useModal();
    const bun = cards.find(card => card.type === 'bun');

    const modalOrderState = useSelector(getModalOrderSelector)
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(openPopup())
    };

    const closeModal = () => {
        dispatch(closePopup())
    };

    return (
        <>
            <section className={clsx(styles.burgerConstructor, 'mt-25')}>
                <div className={clsx(styles.burgerIngredientsContainer, 'pl-8')}>
                    <div className='mr-4 ml-4'>
                {
                    bun && (
                    <ConstructorElement text={bun.name} isLocked='isLocked' type='top' thumbnail={bun.image} price={bun.price} />

                    )
                }
                    </div>
                </div>

                <div className={clsx(styles.burgerIngredientsContainerScroll, 'mb-4')}>
                    <div className='mr-4'>
                        {cards.map((card) => (
                            card.type === 'main' && <BurgerConstructor {...card} key={card._id}/>
                        ))}
                    </div>
                </div>

                <div className={clsx(styles.burgerIngredientsContainer, 'pl-8')}>
                    <div className='mr-4 ml-4'>
                        {
                            bun && ( <ConstructorElement text={bun.name} isLocked='isLocked' type='bottom' thumbnail={bun.image} price={bun.price} />
                            )
                        }
                    </div>
                </div>

                <div className={clsx(styles.priceContainer, 'mt-10')}>
                    <Price priceSize={"medium"} price={610}/>
                    <Button onClick={openModal} htmlType="button" type="primary" size="large">Оформить заказ</Button>
                </div>
            </section>

            {modalOrderState && <Modal closeModal={closeModal}><OrderDetails/></Modal>}
        </>
    )
}