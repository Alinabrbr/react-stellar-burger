import orderDetailsReducer, {initialState} from "../reducers/orderDetailsSlice";

const mockPayload = {
    createdAt: "2024-04-07T11:23:14.643Z",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa0945"],
    name: "Space флюоресцентный антарианский бургер",
    number: 37796,
    owner: "65e4a30a97ede0001d05f699",
    status: "done",
    updatedAt: "2024-04-07T11:23:15.274Z",
    __v: 0,
    _id: "6612822297ede0001d064a6e"
};

const mockOrderDetailsRequestWithMessage = {
    message: "error"
}

describe("Order details reducer", () => {
    it("Order details pending", () => {
        expect(orderDetailsReducer(initialState, {
            type: "orderDetails/fetchOrderResult/pending",
        })).toEqual({
            ...initialState,
            loading: true,
            error: null
        })
    })
    it('Order details fulfilled', () => {
        expect(orderDetailsReducer(initialState, {
            type: 'orderDetails/fetchOrderResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            ...initialState,
            order: mockPayload,
            loading: false
        })
    })
    it('Order details rejected', () => {
        expect(orderDetailsReducer(initialState, {
            type: 'orderDetails/fetchOrderResult/rejected',
            error: mockOrderDetailsRequestWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockOrderDetailsRequestWithMessage.message),
            loading: false,
            order: null
        })
    })
})