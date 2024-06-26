import orderInfoReducer, {initialState} from "../reducers/orderIdInfoSlice";

const mockPayload = {
    "success": true,
    "orders": [
        {
            "_id": "65d0b04397ede0001d05c948",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093c"
            ],
            "owner": "658556a887899c001b824aff",
            "status": "done",
            "name": "Краторный люминесцентный бургер",
            "createdAt": "2024-02-17T13:10:27.612Z",
            "updatedAt": "2024-02-17T13:10:28.088Z",
            "number": 34391,
            "__v": 0
        }
    ]
};

describe("Order info reducer", () => {
    test("Order info fulfilled", () => {
        expect(orderInfoReducer(initialState, {
                type: "orderInfo/get/fulfilled",
                payload: mockPayload
            })
        )
            .toEqual({
                info: mockPayload.orders[0] ?? null
            })
    })
})