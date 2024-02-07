import React from "react";
import styles from './Ingredient-details.module.css'

export default function IngredientDetails({card}) {
    return (
        <>
            <div className={styles.container}>
                <h2 className='text_type_main-large'>Детали ингредиента</h2>
                <img src={card.image_large} alt={card.name}/>
                <p className='text_type_main-medium mt-4 mb-8'>{card.name}</p>
                <div>
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