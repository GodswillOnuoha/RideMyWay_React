export default function reducer(state = {
    rides: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
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