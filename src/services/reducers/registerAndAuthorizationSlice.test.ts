import RegisterReducer, {initialState} from "./registerAndAuthorizationSlice";

const mockPayload = {
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTRhMzBhOTdlZGUwMDAxZDA1ZjY5OSIsImlhdCI6MTcxMjUxNjU5NCwiZXhwIjoxNzEyNTE3Nzk0fQ.45yqF0wT7w5eTSHs6jDY5YdhGuZRAqJQOhsA_pFeR2M",
    refreshToken: "bd7a03ebe0372f5be52f5c3acb655e39906d73061620687064f8ecfd7039210281939e3d0ba1cfd6",
    success: true,
    user: {
        email: "lina.lina.malinaa@gmail.com",
        name: "Алина"
    }
}

const mockRequestWithMessage = {
    message: 'error'
}

const mockLogoutWithMessage = {
    message: 'message'
}

describe('register and auth reducer', () => {
    it('register pending', () => {
        expect(RegisterReducer(initialState, {
            type: 'register/fetchAccessTokenResult/pending',
        })).toEqual({
            ...initialState,
            isLoading: true
        })
    })
    it('register fulfilled', () => {
        expect(RegisterReducer(initialState, {
            type: 'register/fetchAccessTokenResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            ...initialState,
            accessToken: mockPayload.accessToken,
            refreshToken: mockPayload.refreshToken,
            isLoading: false,
            // localStorage.setItem('accessToken', mockPayload.accessToken),
            // localStorage.setItem('refreshToken', mockPayload.refreshToken)
        })
    })
    it('register rejected with message', () => {
        expect(RegisterReducer(initialState, {
            type: 'register/fetchAccessTokenResult/rejected',
            payload: mockRequestWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockRequestWithMessage.message),
            isLoading: false,
        })
    })
    it('register rejected without message', () => {
        expect(RegisterReducer(initialState, {
            type: 'register/fetchAccessTokenResult/rejected',
            payload: {}
        })).toEqual({
            ...initialState,
            error: null,
            isLoading: false,
        })
    })
})

describe('login reducer', () => {
    it('login pending', () => {
        expect(RegisterReducer(initialState, {
            type: 'login/fetchAccessTokenResult/pending',
        })).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    })
    it('login fulfilled', () => {
        expect(RegisterReducer(initialState, {
            type: 'login/fetchAccessTokenResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            ...initialState,
            accessToken: mockPayload.accessToken,
            refreshToken: mockPayload.refreshToken,
            isLoading: false,
        })
    })
    it('login rejected with message', () => {
        expect(RegisterReducer(initialState, {
            type: 'login/fetchAccessTokenResult/rejected',
            payload: mockRequestWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockRequestWithMessage.message),
            isLoading: false,
        })
    })
    it('login rejected without message', () => {
        expect(RegisterReducer(initialState, {
            type: 'login/fetchAccessTokenResult/rejected',
            payload: {}
        })).toEqual({
            ...initialState,
            error: null,
            isLoading: false,
        })
    })
})

describe('logout reducer', () => {
    it('logout pending', () => {
        expect(RegisterReducer(initialState, {
            type: 'logout/pending',
        })).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    })
    it('logout fulfilled with message', () => {
        expect(RegisterReducer(initialState, {
            type: 'logout/fulfilled',
            payload: mockLogoutWithMessage
        })).toEqual({
            ...initialState,
            message: mockLogoutWithMessage.message,
            isLoading: false,
            accessToken: '',
            refreshToken: '',
        })
    })
    it('logout fulfilled without message', () => {
        expect(RegisterReducer(initialState, {
            type: 'logout/fulfilled',
            payload: mockPayload,
            message: {}
        })).toEqual({
            ...initialState,
            message: null,
            isLoading: false,
            accessToken: '',
            refreshToken: '',
        })
    })
    it('logout rejected with message', () => {
        expect(RegisterReducer(initialState, {
            type: 'logout/rejected',
            payload: mockRequestWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockRequestWithMessage.message),
            isLoading: false,
        })
    })
    it('logout rejected without message', () => {
        expect(RegisterReducer(initialState, {
            type: 'logout/rejected',
            payload: {}
        })).toEqual({
            ...initialState,
            error: null,
            isLoading: false,
        })
    })
})

describe('refresh token reducer', () => {
    it('refresh token pending', () => {
        expect(RegisterReducer(initialState, {
            type: 'token/fetchRefreshTokenResult/pending',
        })).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    })
    it('refresh token fulfilled', () => {
        expect(RegisterReducer(initialState, {
            type: 'token/fetchRefreshTokenResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            ...initialState,
            accessToken: mockPayload.accessToken,
            refreshToken: mockPayload.refreshToken,
            success: mockPayload.success,
            isLoading: false,
        })
    })
    it('refresh token rejected without message', () => {
        expect(RegisterReducer(initialState, {
            type: 'token/fetchRefreshTokenResult/rejected',
            payload: {}
        })).toEqual({
            ...initialState,
            isLoading: false,
        })
    })
})