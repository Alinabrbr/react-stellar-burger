import React from "react";
import BurgerConstructor from "../Burger-constructor/Burger-Constructor";
import clsx from "clsx";
import styles from "../SectionBurgerConstructor/SectionBurgerConstructor.module.css";
import Price from "../Price/Price";
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Order-details/Order-details";
import useModal from "../../hooks/useModal";
import PropTypes from "prop-types";

export default function SectionBurgerConstructor ({cards}){

    const {isModalState, openModal, closeModal} = useModal();
    const bun = cards.find(card => card.type === 'bun');

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

            {isModalState && <Modal closeModal={closeModal}><OrderDetails/></Modal>}
        </>
    )
}

SectionBurgerConstructor.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    _id: PropTypes.number
}
