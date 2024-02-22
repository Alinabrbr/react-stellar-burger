import React from "react";
import BurgerConstructor from "../Burger-constructor/Burger-Constructor";
import clsx from "clsx";
import styles from "../SectionBurgerConstructor/SectionBurgerConstructor.module.css";
import Price from "../Price/Price";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Order-details/Order-details";
import {useDispatch, useSelector} from "react-redux";
import {closePopup, openPopup} from "../../services/orderSlice";
import {getModalOrderSelector} from "../../services/getModalOrderSelector";
import {addIngredient, removeIngredient} from "../../services/constructorSlice";
import {useDrop} from "react-dnd";
import {constructorSelector} from "../../services/constructorSelector";

export default function SectionBurgerConstructor() {

    const cards = useSelector(constructorSelector);

    const bun = cards.find(card => card.type === 'bun');

    const modalOrderState = useSelector(getModalOrderSelector)
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(openPopup())
    };

    const closeModal = () => {
        dispatch(closePopup())
    };

    const [, dropRef] = useDrop({
        accept: "ingredient",
        drop(card) {
            dispatch(addIngredient(card));
        }
    });

    const deleteIngredient = (card) => {
        dispatch(removeIngredient(card));
    }

    return (
        <>
            <section className={clsx(styles.burgerConstructor, 'mt-25')} ref={dropRef}
                     onDragOver={(evt) => evt.preventDefault()}>
                <div className={clsx(styles.burgerIngredientsContainer, 'pl-8')}>
                    <div className='mr-4 ml-4'>
                        {
                            bun && (
                                <ConstructorElement text={`${bun.name} (верх)`} isLocked='isLocked' type='top' thumbnail={bun.image} price={bun.price}/>
                            )
                        }
                    </div>
                </div>

                <div className={clsx(styles.burgerIngredientsContainerScroll, 'mb-4')}>
                    <div className='mr-4'>
                        {cards.map((card) => (
                            (card.type === "main" || card.type ==='sauce') && <BurgerConstructor {...card} key={card.ingredientId} handleClose={() => deleteIngredient(card.ingredientId)}/>
                        ))}
                    </div>
                </div>

                <div className={clsx(styles.burgerIngredientsContainer, 'pl-8')}>
                    <div className='mr-4 ml-4'>
                        {
                            bun && (
                                <ConstructorElement text={`${bun.name} (низ)`} isLocked='isLocked' type='bottom' thumbnail={bun.image} price={bun.price}/>
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