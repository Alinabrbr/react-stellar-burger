import React from "react";
import Price from "../Price/Price";
import styles from "../Card/Card.module.css";
import clsx from "clsx";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import IngredientDetails from "../Ingredient-details/Ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getModalInfoSelector} from "../../services/getModalInfoSelector";
import {closePopup, openPopup} from "../../services/ingredientsInfoSlice";
import {useDrag} from "react-dnd";

export default function Card({card, priceSize, count}) {

    const modalState = useSelector(getModalInfoSelector)
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(openPopup(card))
    };

    const closeModal = () => {
        dispatch(closePopup())
    };

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: card,
    });

    return (
        <>
            <li onClick={openModal} className={clsx(styles.card)} ref={dragRef}>
                <div className={styles.counter}>
                    <Counter count={count} size="default"/>
                </div>
                <img className='mr-4 ml-4' src={card.image} alt={card.name}/>
                <Price price={card.price} priceSize={priceSize}></Price>
                <p className='text_type_main-default'>{card.name}</p>
            </li>
            {modalState.isModalOpen && modalState.content._id === card._id && <Modal closeModal={closeModal}><IngredientDetails card={modalState.content}/></Modal>}
        </>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
};