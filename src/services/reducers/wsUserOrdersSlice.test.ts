import wsUserOrdersReducer, {
    initialState,
    wsOpenUserOrders,
    wsCloseUserOrders,
    wsErrorUserOrders,
    wsMessageUserOrders
} from "../reducers/wsUserOrdersSlice";

const mockPayload = {
    success: true,
    orders: [
        {
            _id: "60d3b41abdacab0026a733c6",
            ingredients: ["60d3b41abdacab0026a733c5"],
            status: "done",
            name: "Краторная булка N-200i",
            createdAt: "2021-06-24T14:48:26.586Z",
            updatedAt: "2021-06-24T14:48:26.606Z",
            number: 1,
        },
    ],
    total: 0,
    totalToday: 0,
};

describe('user orders reducer', () => {
    it('user orders open', () => {
        expect(wsUserOrdersReducer(initialState, wsOpenUserOrders())).toEqual(
            {
                ...initialState,
                wsConnected: true,
                error: undefined
            });
    });
    it('user orders close', () => {
        expect(wsUserOrdersReducer(
                {
                    wsConnected: true,
                    orders: mockPayload.orders,
                    error: undefined
                },
                wsCloseUserOrders()
            )
        )
            .toEqual(initialState);
    });
    it('user orders error', () => {
        expect(wsUserOrdersReducer(initialState, wsErrorUserOrders("error"))).toEqual(
            {
                ...initialState,
                wsConnected: false,
                error: "error"
            })
    });
    it('user orders message', () => {
        expect(wsUserOrdersReducer(initialState, wsMessageUserOrders(mockPayload))).toEqual(
            {
                orders: mockPayload.orders,
                wsConnected: true,
                error: undefined
            })
    });
});