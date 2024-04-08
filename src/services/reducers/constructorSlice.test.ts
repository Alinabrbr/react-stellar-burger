import constructorSliceReducer, {
    initialState,
    addIngredient,
    removeIngredient,
    clearStore
}
    from "../reducers/constructorSlice";
import {v4 as uuidv4} from "uuid";
import {TIngredient} from "../../utils/types/types";

const mockBunIngredient: TIngredient = {
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
    ingredientId: uuidv4()
}

const mockInitialStateWithBun = {
    constructorIngredient: [{
        _id: "643d69a5c3f7b9001cfa093d",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
        ingredientId: uuidv4()
    }],
    totalPrice: 988
};

const mockSauceOrMainAddIngredient: TIngredient = {
    _id: "643d69a5c3f7b9001cfa0947",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
    ingredientId: uuidv4()
}

const mockSauceOrMainRemoveIngredient: TIngredient = {
    _id: "643d69a5c3f7b9001cfa0947",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
    ingredientId: "643d69a5c3f7b9001cfa093d"
}

const mockInitialStateWithSauceOrMainRemove = {
    constructorIngredient: [{
        _id: "643d69a5c3f7b9001cfa0947",
        name: "Плоды Фалленианского дерева",
        type: "main",
        proteins: 20,
        fat: 5,
        carbohydrates: 55,
        calories: 77,
        price: 874,
        image: "https://code.s3.yandex.net/react/code/sp_1.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
        __v: 0,
        ingredientId: "643d69a5c3f7b9001cfa093d"
    }],
    totalPrice: 874
};

describe('constructor ingredients reducer', () => {
    it('constructor ingredients addIngredient bun', () => {
        expect(constructorSliceReducer(initialState, addIngredient(mockBunIngredient)))
            .toEqual({
                ...initialState,
                constructorIngredient: [mockBunIngredient],
                totalPrice: mockBunIngredient.price*2,
            });
    });
    it('constructor ingredients addIngredient bun, bun exists in list', () => {
        expect(constructorSliceReducer(mockInitialStateWithBun, addIngredient(mockBunIngredient)))
            .toEqual({
                ...initialState,
                constructorIngredient: [mockBunIngredient],
                totalPrice: mockBunIngredient.price*2,
            });
    });
    it('constructor ingredients addIngredient sauce or main', () => {
        expect(constructorSliceReducer(initialState, addIngredient(mockSauceOrMainAddIngredient)))
            .toEqual({
                ...initialState,
                constructorIngredient: [mockSauceOrMainAddIngredient],
                totalPrice: mockSauceOrMainAddIngredient.price,
            });
    });
    it('constructor ingredients removeIngredient sauce or main', () => {
        expect(constructorSliceReducer(mockInitialStateWithSauceOrMainRemove, removeIngredient(mockSauceOrMainRemoveIngredient)))
            .toEqual({
                ...initialState,
                constructorIngredient: [],
                totalPrice: 0
            })
    });
    it('constructor ingredients clearStore', () => {
        expect(constructorSliceReducer(initialState, clearStore())).toEqual(
            {
                ...initialState
            })
    });
});