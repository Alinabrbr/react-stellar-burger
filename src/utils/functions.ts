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

export function getStatus(order: TOrder): string {
    switch (order.status) {
        case "done": {
            return "Выполнен";
        }
        case "pending": {
            return "Готовится";
        }
        case "created": {
            return "Создан";
        }
        default: {
            return "Отменен";
        }
    }
}