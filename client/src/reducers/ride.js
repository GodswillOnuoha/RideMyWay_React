import initialState from '../initialState'
import * as types from '../action.types/ride'

export default function reducer(state = initialState.ride, action) {
    switch (action.type) {
        case types.ERROR: {
            return { ...state, error: action.payload, success: false }
        }
        case types.CLEAR: {
            return { ...state, error: '', success: false }
        }
        case types.LOADING: {
            return { ...state, loading: action.payload, error: "", success: false }
        }
        case types.API_CALL_SUCCESS: {
            return { ...state, success: true }
        }
        case types.FETCH_RIDES: {
            return { ...state, rides: action.payload }
        }
    }
    return state;
}