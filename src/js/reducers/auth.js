import { auth } from '../initialState'
import * as types from '../action.types/auth'

export default function reducer(state = auth, action) {
    switch (action.type) {
        case types.LOG_USER_IN: {
            return { ...state, isLoggedIn: true, user: action.payload }
        }
        case types.LOG_USER_OUT: {
            return { ...state, isLoggedIn: false }
        }
        case types.LOADING: {
            return { ...state, loading: action.payload }
        }
        case types.LOGIN_SUCCESS: {
            return { ...state, user: action.payload.user, isLoggedIn: true }
        }
        case types.LOGIN_ERROR: {
            return { ...state, error: true, message: action.payload.message }
        }
        case types.REGISTERATION_SUCCESS: {
            return { ...state, user: action.payload.user, isLoggedIn: true }
        }
        case types.REGISTERATION_ERROR: {
            return { ...state, error: true, message: action.payload.message }
        }
    }
    return state;
}