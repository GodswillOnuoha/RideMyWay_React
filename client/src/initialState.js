const initialState = {
    auth: {
        loading: false,
        error: false,
        message: '',
        user: null,
        isLoggedIn: false
    },
    ride: {
        loading: false,
        error: "",
        success: false,
        rides: []
    }
}

export default initialState
