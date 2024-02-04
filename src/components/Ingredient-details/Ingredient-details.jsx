import React from "react";
import styles from './Ingredient-details.module.css'


export default function IngredientDetails (){
    return (
                    <div className={styles.container}>
                        <h2 className='text_type_main-large'>Детали ингредиента</h2>
                        <img/>
                        <p className='text_type_main-medium mt-4 mb-8'>Биокотлета из марсианской Магнолии</p>
                        <div>
                            <div className={styles.list}>
                                <div className={styles.listItem}>
                                    <p className='text_type_main-default'>Калории,ккал</p>
                                    <p className='text_type_digits-default'>244,4</p>
                                </div>

                                <div className={styles.listItem}>
                                    <p className='text_type_main-default'>Белки, г</p>
                                    <p className='text_type_digits-default'>244,4</p>
                                </div>

                                <div className={styles.listItem}>
                                    <p className='text_type_main-default'>Жиры, г</p>
                                    <p className='text_type_digits-default'>244,4</p>
                                </div>

                                <div className={styles.listItem}>
                                    <p className='text_type_main-default'>Углеводы, г</p>
                                    <p className='text_type_digits-default'>244,4</p>
                                </div>

                            </div>
                        </div>
                    </div>
    )
}