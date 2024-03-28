import {TIngredient, useAppSelector} from "../../utils/types/types";
import styles from "./OrderFeed-ingredient.module.css";
import {getCards} from "../../services/actions/actionsSelector";

interface IngredientIconProps {
    ingredient: string;
    counter?: number;
}

export default function OrderFeedIngredient({ ingredient, counter }: IngredientIconProps) {
    const allIngredients = useAppSelector(getCards);
    const currentIngredient: TIngredient | undefined = allIngredients.find(
        (item) => item._id === ingredient
    );
    if (!currentIngredient) {
        return null;
    }

    return (
        <div className={styles.icon__container}>
            <img
                className={styles.icon}
                src={currentIngredient.image}
                alt={currentIngredient.name}
            />
            {counter ? (
                <p
                    className={`${styles.counter} text text_type_main-default`}
                >{`+${counter}`}</p>
            ) : null}
        </div>
    );
}
