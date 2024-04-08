import cardsReducer, {initialState} from "./cardsSlice";

const mockPayload= [
        {
            "_id": "643d69a5c3f7b9001cfa093c",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa0941",
            "name": "Биокотлета из марсианской Магнолии",
            "type": "main",
            "proteins": 420,
            "fat": 142,
            "carbohydrates": 242,
            "calories": 4242,
            "price": 424,
            "image": "https://code.s3.yandex.net/react/code/meat-01.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
            "__v": 0
        },
        {
            "_id": "643d69a5c3f7b9001cfa093e",
            "name": "Филе Люминесцентного тетраодонтимформа",
            "type": "main",
            "proteins": 44,
            "fat": 26,
            "carbohydrates": 85,
            "calories": 643,
            "price": 988,
            "image": "https://code.s3.yandex.net/react/code/meat-03.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
            "__v": 0
        },
];

const mockCardsRequestWithMessage = {
    message: 'error'
}

describe("cards reducer", () => {
    it("cards pending", () => {
        expect(cardsReducer(initialState, {
            type: "cardsGet/pending",
        })).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    })
    it("cards fulfilled", () => {
        expect(cardsReducer(initialState, {
            type: "cardsGet/fulfilled",
            payload: mockPayload
        })).toEqual({
            cardsArray: mockPayload,
            isLoading: false,
            error: null
        })
    })
    it("cards rejected with message", () => {
        expect(cardsReducer(initialState, {
            type: "cardsGet/rejected",
            payload: mockCardsRequestWithMessage
        })).toEqual({
            cardsArray: [],
            isLoading: false,
            error: Error(mockCardsRequestWithMessage.message)
        })
    })
    it("cards rejected without message", () => {
        expect(cardsReducer(initialState, {
            type: "cardsGet/rejected",
            payload: {}
        })).toEqual({
            cardsArray: [],
            isLoading: false,
            error: null
        })
    })
})