import profileInfoReducer, {initialState} from "./getInfoProfileSlice";

const mockPayload = {
    user: {
        email: "lina.lina.malinaa@gmail.com",
        name: "Алина"
    }
}

const mockInfoProfileRequestWithMessage = {
    message: 'error'
}

describe('get info profile reducer', () => {
    it('get info profile pending', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchInfoProfileResult/pending',
        })).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    })
    it('get info profile fulfilled', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchInfoProfileResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            name: mockPayload.user.name,
            email: mockPayload.user.email,
            isLoading: false,
            error: null
        })
    })
    it('get info profile rejected with message', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchInfoProfileResult/rejected',
            payload: mockInfoProfileRequestWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockInfoProfileRequestWithMessage.message),
            isLoading: false,
        })
    })
    it('get info profile rejected without message', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchInfoProfileResult/rejected',
            payload: {}
        })).toEqual({
            ...initialState,
            error: null,
            isLoading: false,
        })
    })
})

describe('get edit info profile reducer', () => {
    it('get edit info profile pending', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchEditInfoProfileResult/pending',
        })).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        })
    })
    it('get edit info profile fulfilled', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchEditInfoProfileResult/fulfilled',
            payload: mockPayload
        })).toEqual({
            name: mockPayload.user.name,
            email: mockPayload.user.email,
            isLoading: false,
            error: null
        })
    })
    it('get edit info profile fulfilled clean', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchEditInfoProfileResult/fulfilled',
            payload: {}
        })).toEqual({
            name: "",
            email: "",
            isLoading: false,
            error: null
        })
    })
    it('get edit info profile rejected with message', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchEditInfoProfileResult/rejected',
            payload: mockInfoProfileRequestWithMessage
        })).toEqual({
            ...initialState,
            error: Error(mockInfoProfileRequestWithMessage.message),
            isLoading: false,
        })
    })
    it('get edit info profile rejected without message', () => {
        expect(profileInfoReducer(initialState, {
            type: 'profileInfo/fetchEditInfoProfileResult/rejected',
            payload: {}
        })).toEqual({
            ...initialState,
            error: null,
            isLoading: false,
        })
    })
})