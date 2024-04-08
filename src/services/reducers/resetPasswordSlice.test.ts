import resetPasswordReducer, {initialState} from "../reducers/resetPasswordSlice";


const mockPayload = {
    "success": true,
    "user": {
        "email": "lina.lina.malinaa@gmail.com",
        "name": "Алина"
    }
};

const mockResetPasswordWithMessage = {
    message: 'error'
}

describe('reset password reducer', () => {
    it('reset password pending', () => {
        expect(resetPasswordReducer(initialState, {
            type: 'password/fetchResetPasswordResult/pending',
        })).toEqual({
            ...initialState,
            isLoading: true,
        })
    })
    it('reset password fulfilled', () => {
        expect(resetPasswordReducer(initialState, {
            type: 'password/fetchResetPasswordResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            ...initialState,
            success: mockPayload.success,
        })
    })
    it('reset password rejected', () => {
        expect(resetPasswordReducer(initialState, {
            type: 'password/fetchResetPasswordResult/rejected',
            payload: mockResetPasswordWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockResetPasswordWithMessage.message),
            isLoading: false,
        })
    })
})