import React from "react";
import clsx from "clsx";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Burger-constructor/Burger-constructor.module.css";
import PropTypes from 'prop-types';
import {useDrag, useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {constructorSelector} from "../../services/constructorSelector";
import {sortIngredients} from "../../services/constructorSlice";

export default function BurgerConstructor({card, index, handleClose}) {

    const burgerConstructor = useSelector(constructorSelector);
    const dispatch = useDispatch();

    const searchIndex = (ingredient) => {
        return burgerConstructor.indexOf(ingredient);
    }

    const [{isDragging}, dragRef] = useDrag({
        type: "ingredientsSort",
        item: {ingredient: card},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, dropRef] = useDrop({
        accept: "ingredientsSort",
        hover({ingredient}) {
            if (ingredient.ingredientId === card.ingredientId) return
                dispatch(sortIngredients({
                    indexFrom: searchIndex(ingredient),
                    indexTo: index,
                    ingredient: ingredient,
                }))
            }
    });

    const opacity = isDragging ? 0 : 1;
    const transition = isDragging ? 'all .6s' : '';

    return (
        <div className={clsx(styles.burgerContainer, 'mt-4 ml-4')} ref={node => dragRef(dropRef(node))} style={{ opacity, transition }}>
            <DragIcon type="primary"/>
            <ConstructorElement text={card.name} isLocked={card.isLocked} thumbnail={card.image} price={card.price}
                                handleClose={handleClose}/>
        </div>
    )
}

BurgerConstructor.propTypes = {
    name: PropTypes.string,
    isLocked: PropTypes.bool,
    image: PropTypes.string,
    price: PropTypes.number
};