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
        case types.CREAT_RIDE_SUCCESS: {
            return { ...state, success: true }
        }
        case "FETCH_RIDES": {
            return { ...state, fetching: true }
        }
        case "FETCH_RIDES_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_RIDES_FULFILLED": {
            return { ...action.payload }
        }
    }
    return state;
}