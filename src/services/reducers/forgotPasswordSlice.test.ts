import forgotPasswordReducer, {initialState} from "../reducers/forgotPasswordSlice";

const mockPayload = {
    success: 'true'
}

const mockRejectedWithMessagePayload = {
    message: 'error'
}

describe('forgot password reducer', () => {
    it("forgot password pending", () => {
        expect(forgotPasswordReducer(initialState, {
            type: "password/fetchForgotPasswordResult/pending",
        })).toEqual({
            isLoading: true,
            error: null,
            success: false
        })
    })
    it("forgot password fulfilled", () => {
        expect(forgotPasswordReducer(initialState, {
            type: "password/fetchForgotPasswordResult/fulfilled",
            payload: mockPayload,
        })).toEqual({
            ...initialState,
            success: mockPayload.success
        })
    })
    it("forgot password rejected with message", () => {
        expect(forgotPasswordReducer(initialState, {
            type: "password/fetchForgotPasswordResult/rejected",
            payload: mockRejectedWithMessagePayload,
        })).toEqual({
            ...initialState,
            error: Error(mockRejectedWithMessagePayload.message)
        })
    })
    it("forgot password rejected without message", () => {
        expect(forgotPasswordReducer(initialState, {
            type: "password/fetchForgotPasswordResult/rejected",
            payload: {},
        })).toEqual({
            ...initialState,
            error: null
        })
    })
})