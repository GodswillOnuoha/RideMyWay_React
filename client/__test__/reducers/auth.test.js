import auth from '../../src/reducers/auth';
import * as types from '../../src/action.types/auth';

describe("auth reduces", () => {

    it("should return initial state", () => {
        expect(auth(undefined, {})).toEqual(
            {
                loading: false,
                error: false,
                message: '',
                user: null,
                isLoggedIn: false
            }
        );
    });

    it("should handle LOADING", () => {
        const action = { type: types.LOADING, payload: true }
        expect(auth({}, action)).toEqual({ loading: action.payload });
    });

    it("should handle LOG_USER_IN", () => {
        const action = { type: types.LOG_USER_IN, payload: { id: 2, username: "test" } }
        expect(auth({}, action)).toEqual({ isLoggedIn: true, user: action.payload });
    });

    it("should handle LOG_USER_OUT", () => {
        const action = { type: types.LOG_USER_OUT, payload: false }
        expect(auth({}, action)).toEqual({ isLoggedIn: action.payload });
    });

    it("should handle LOGIN_SUCCESS", () => {
        const action = { type: types.LOGIN_SUCCESS, payload: { user: { id: 2, username: "test" } } }
        expect(auth({}, action)).toEqual({ isLoggedIn: true, user: action.payload.user });
    });

    it("should handle LOGIN_ERROR", () => {
        const action = { type: types.LOGIN_ERROR, payload: { message: 'something went wrong' } }
        expect(auth({}, action)).toEqual({ error: true, message: action.payload.message });
    });

    it("should handle REGISTERATION_SUCCESS", () => {
        const action = { type: types.REGISTERATION_SUCCESS, payload: { user: { id: 2, username: "test" } } }
        expect(auth({}, action)).toEqual({ isLoggedIn: true, user: action.payload.user });
    });

    it("should handle REGISTERATION_ERROR", () => {
        const action = { type: types.REGISTERATION_ERROR, payload: { message: 'something went wrong' } }
        expect(auth({}, action)).toEqual({ error: true, message: action.payload.message });
    });

})