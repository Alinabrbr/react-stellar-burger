import React from "react";
import ConstructorElementBun from "../ConstructorElementBun/ConstructorElementBun";
import clsx from "clsx";
import styles from "./BurgerConstructor.module.css";
import Price from "../Price/Price";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Order-details/Order-details";
import {closePopup, openPopup} from "../../services/reducers/orderSlice";
import {getModalOrderSelector} from "../../services/actions/actionsSelector";
import {addIngredient, clearStore, removeIngredient} from "../../services/reducers/constructorSlice";
import {useDrop} from "react-dnd";
import {totalPriceSelector} from "../../services/actions/actionsSelector";
import {fetchOrderResult} from "../../services/reducers/orderDetailsSlice";
import {useNavigate} from "react-router-dom";
import {TIngredient, useAppDispatch, useAppSelector} from "../../utils/types/types";
import {constructorSelector} from "../../services/actions/actionsSelector";

export default function BurgerConstructor(): JSX.Element {

    const cards: TIngredient[] = useAppSelector(constructorSelector);

    const totalPrice = useAppSelector(totalPriceSelector);

    const bun = cards.find((card) => card.type === 'bun');

    const modalOrderState = useAppSelector(getModalOrderSelector)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const accessToken: string | null = localStorage.getItem("accessToken");

    const openModal = (): void => {
        dispatch(openPopup())
    };

    const closeModal = (): void => {
        dispatch(closePopup());
        clearStoreBurgerConstructor();
    };

    const clearStoreBurgerConstructor = (): void => {
        dispatch(clearStore());
    }

    const [, dropRef] = useDrop({
        accept: "ingredient",
        drop(card) {
            dispatch(addIngredient(card));
        }
    });

    const deleteIngredient = (card: TIngredient): void => {
        dispatch(removeIngredient(card));
    }

    return (
        <>
            <section className={clsx(styles.burgerConstructor, 'mt-25')} ref={dropRef} data-cy="constructor"
                     onDragOver={(evt) => evt.preventDefault()}>
                <div className={clsx(styles.burgerIngredientsContainer, 'pl-8')}>
                    <div className='mr-4 ml-4' data-cy="bun-top">
                        {
                            bun && (
                                <ConstructorElement text={`${bun.name} (верх)`} isLocked={true} type='top'
                                                    thumbnail={bun.image} price={bun.price}/>
                            )
                        }
                    </div>
                </div>

                <div className={clsx(styles.burgerIngredientsContainerScroll, 'mb-4')}>
                    <div className='mr-4' data-cy="constructor-ingredients">
                        {cards.map((card: TIngredient, index: number) => (
                            (card.type === "main" || card.type === 'sauce') &&
                            <ConstructorElementBun card={card} index={index} key={card.ingredientId}
                                                   handleClose={() => deleteIngredient(card)}/>
                        ))}
                    </div>
                </div>

                <div className={clsx(styles.burgerIngredientsContainer, 'pl-8')}>
                    <div className='mr-4 ml-4' data-cy="bun-bottom">
                        {
                            bun && (
                                <ConstructorElement text={`${bun.name} (низ)`} isLocked={true} type='bottom'
                                                    thumbnail={bun.image} price={bun.price}/>
                            )
                        }
                    </div>
                </div>

                <div className={clsx(styles.priceContainer, 'mt-10')}>
                    <Price priceSize={"medium"} price={totalPrice}/>
                    <Button data-cy="order-button" onClick={() => {
                        if (!accessToken) {
                            return (
                                navigate("/login")
                            )
                        }
                        openModal();
                        if (bun) {
                            dispatch(fetchOrderResult({
                                ingredients: [...cards.map((ingredient) => ingredient._id), bun._id],
                                token: accessToken
                            }));
                        }
                    }}
                            disabled={cards.length < 2 || !bun}
                            htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </section>

            {modalOrderState && <Modal closeModal={closeModal}><OrderDetails/></Modal>}
        </>
    )
}