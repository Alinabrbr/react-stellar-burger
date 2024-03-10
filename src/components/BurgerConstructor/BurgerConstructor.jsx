import React from "react";
import ConstructorElementBun from "../ConstructorElementBun/ConstructorElementBun";
import clsx from "clsx";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Order-details/Order-details";
import {useDispatch, useSelector} from "react-redux";
import {closePopup, openPopup} from "../../services/orderSlice";
import {getModalOrderSelector} from "../../services/getModalOrderSelector";
import {addIngredient, clearStore, removeIngredient} from "../../services/constructorSlice";
import {useDrop} from "react-dnd";
import {constructorSelector} from "../../services/constructorSelector";
import {totalPriceSelector} from "../../services/totalPriceSelector";
import {fetchOrderResult} from "../../services/orderDetailsSlice";
import {useNavigate} from "react-router-dom";

export default function BurgerConstructor() {

    const cards = useSelector(constructorSelector);

    const totalPrice = useSelector(totalPriceSelector);

    const bun = cards.find(card => card.type === 'bun');

    const modalOrderState = useSelector(getModalOrderSelector)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const accessToken = localStorage.getItem("accessToken");

    const openModal = () => {
        dispatch(openPopup())
    };

    const closeModal = () => {
        dispatch(closePopup());
        clearStoreBurgerConstructor();
    };

    const clearStoreBurgerConstructor = () => {
        dispatch(clearStore());
    }

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
                        {cards.map((card, index) => (
                            (card.type === "main" || card.type ==='sauce') && <ConstructorElementBun card={card} index={index} key={card.ingredientId} handleClose={() => deleteIngredient(card)}/>
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
                    <Price priceSize={"medium"} price={totalPrice}/>
                    <Button onClick={() => {
                        if (!accessToken) {
                            return (
                                navigate("/login")
                            )
                        }
                        openModal();
                        dispatch(fetchOrderResult({ingredients: [...cards.map((ingredient) => ingredient._id), bun._id], token: accessToken}));
                    }}
                            disabled={cards.length === 0 || !cards.find((item) => item.type === "bun")}
                            htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </section>

            {modalOrderState && <Modal closeModal={closeModal}><OrderDetails/></Modal>}
        </>
    )
}