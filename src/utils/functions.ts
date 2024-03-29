import {TIngredient, TOrder} from "./types/types";

export const calculatePriceOrder = (
    order: TOrder,
    ingredients: TIngredient[]
): number => {
    let totalPrice = 0;
    order.ingredients.forEach((id) => {
        const ingredient = ingredients.find((item) => item._id === id);
        if (ingredient) {
            totalPrice += ingredient.price;
        }
    });
    return totalPrice;
};