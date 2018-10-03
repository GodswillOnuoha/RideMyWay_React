export default function reducer(state = {
    loggedIn: false,
    user: null,
    message: null,
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "REGISTER_USER": {
            return { ...state, fetching: true }
        }
        case "REGISTER_USER_FULFILLED": {
            return { ...state, user: action.payload.user, loggedIn: true, error: null, message: action.payload.message }
        }
        case "REGISTER_USER_FAILED": {
            return { ...state, user: null, loggedIn: false, error: action.payload.error, message: action.payload.message }
        }
    }
    return state;
}