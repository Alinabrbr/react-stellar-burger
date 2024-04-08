import wsOrderFeedReducer, {
    initialState,
    wsOpenOrderFeed,
    wsCloseOrderFeed,
    wsErrorOrderFeed,
    wsMessageOrderFeed
} from "../reducers/wsOrderFeedSlice";

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
    total: 12000,
    totalToday: 20,
};

describe('order feed reducer', () => {
    it('order feed open', () => {
        expect(wsOrderFeedReducer(initialState, wsOpenOrderFeed())).toEqual(
            {
                ...initialState,
                wsConnected: true,
                error: undefined
            });
    });
    it('order feed close', () => {
        expect(wsOrderFeedReducer(
                {
                    wsConnected: true,
                    orders: mockPayload.orders,
                    total: mockPayload.total,
                    totalToday: mockPayload.totalToday,
                    error: undefined
                },
            wsCloseOrderFeed()
            )
        )
            .toEqual(initialState);
    });
    it('order feed error', () => {
        expect(wsOrderFeedReducer(initialState, wsErrorOrderFeed("error"))).toEqual(
            {
                ...initialState,
                wsConnected: false,
                error: "error"
            })
    });
    it('order feed message', () => {
        expect(wsOrderFeedReducer(initialState, wsMessageOrderFeed(mockPayload))).toEqual(
            {
                orders: mockPayload.orders,
                total: mockPayload.total,
                totalToday: mockPayload.totalToday,
                wsConnected: true,
                error: undefined
            })
    });
});