import React from "react";
import clsx from "clsx";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorElementBun.module.css";
import {useDrag, useDrop} from "react-dnd";
import {constructorSelector} from "../../services/constructorSelector";
import {sortIngredients} from "../../services/constructorSlice";
import {TIngredient, useAppDispatch, useAppSelector} from "../../utils/types/types";

type TElementBunProps = {
    card: TIngredient;
    index: number;
    handleClose: () => void;
}

type TDragItem = {
    ingredient: TIngredient;
}

type TCollectedProps = {
    isDragging: boolean;
}

export default function ConstructorElementBun({card, index, handleClose}:TElementBunProps ) {

    const burgerConstructor = useAppSelector(constructorSelector);
    const dispatch = useAppDispatch();

    const searchIndex = (ingredient: TIngredient) => {
        return burgerConstructor.indexOf(ingredient);
    }

    const [{isDragging}, dragRef] = useDrag<TDragItem, unknown, TCollectedProps>({
        type: "ingredientsSort",
        item: {ingredient: card},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, dropRef] = useDrop<TDragItem, unknown, unknown >({
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
        <div className={clsx(styles.ConstructorElementBunContainer, 'mt-4 ml-4')} ref={(node : HTMLDivElement | null) => dragRef(dropRef(node))} style={{ opacity, transition }}>
            <DragIcon type="primary"/>
            <ConstructorElement text={card.name} isLocked={card.isLocked} thumbnail={card.image} price={card.price}
                                handleClose={handleClose}/>
        </div>
    )
}