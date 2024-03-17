import React, {useEffect} from "react";
import styles from './Ingredient-details.module.css'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getCards, getCardsLoading} from "../../services/cardsSelector";
import {getIngredients} from "../../services/cardsSlice";
import {TIngredient, useAppSelector} from "../../utils/types/types";

export default function IngredientDetails() : JSX.Element {
    const dispatch = useDispatch();
    const {id} = useParams();
    const isCardsLoading = useAppSelector(getCardsLoading);
    const cards: TIngredient[] = useAppSelector(getCards);

    useEffect(():void => {
        if (!cards) {
            dispatch(getIngredients());
        }
    }, [dispatch]);

    const el: TIngredient | undefined = cards.find((item: TIngredient): boolean => item._id === id);

    if (isCardsLoading || cards.length === 0) {
        return <>Ingredient is loading</>
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className='text_type_main-large title'>Детали ингредиента</h2>
                    <img src={el?.image_large} alt={el?.name}/>
                </div>
                <div className={styles.infoContainer}>
                    <p className='text_type_main-medium mt-4 mb-8'>{el?.name}</p>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Калории,ккал</p>
                            <p className='text_type_digits-default'>{el?.calories}</p>
                        </div>

                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Белки, г</p>
                            <p className='text_type_digits-default'>{el?.proteins}</p>
                        </div>

                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Жиры, г</p>
                            <p className='text_type_digits-default'>{el?.fat}</p>
                        </div>

                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Углеводы, г</p>
                            <p className='text_type_digits-default'>{el?.carbohydrates}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}