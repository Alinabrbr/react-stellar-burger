import React from "react";
import styles from './Ingredient-details.module.css'
import PropTypes from "prop-types";

export default function IngredientDetails({card}) {
    return (
        <>
            <div className={styles.container}>
                <h2 className='text_type_main-large title'>Детали ингредиента</h2>
                <img src={card.image_large} alt={card.name}/>
                <div className={styles.infoContainer}>
                    <p className='text_type_main-medium mt-4 mb-8'>{card.name}</p>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Калории,ккал</p>
                            <p className='text_type_digits-default'>{card.calories}</p>
                        </div>

                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Белки, г</p>
                            <p className='text_type_digits-default'>{card.proteins}</p>
                        </div>

                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Жиры, г</p>
                            <p className='text_type_digits-default'>{card.fat}</p>
                        </div>

                        <div className={styles.listItem}>
                            <p className='text_type_main-default'>Углеводы, г</p>
                            <p className='text_type_digits-default'>{card.carbohydrates}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    image_large: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.string,
    fat: PropTypes.string,
    carbohydrates: PropTypes.string
};