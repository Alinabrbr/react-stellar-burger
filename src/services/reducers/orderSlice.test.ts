import orderPopupReducer, {
    initialState,
    openPopup,
    closePopup
} from "../reducers/orderSlice";

describe('order reducer', () => {
    test('order popup open', () => {
        expect(orderPopupReducer(initialState, openPopup())).toEqual(
            {
                ...initialState,
                isModalState: true
            });
    });
    test('order popup close', () => {
        expect(orderPopupReducer({isModalState: false}, closePopup())).toEqual(initialState);
    });
});