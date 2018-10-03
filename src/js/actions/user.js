import axios from 'axios';

export function loginUser(user) {
    return function (dispatch) {
        axios.post('http://localhost:3000/api/v1/auth/signup', user)
            .then((response) => {
                dispatch({ "type": "REGISTER_USER_FULFILLED", payload: response.data });
            })
            .catch((error) => {
                console.log(error.response.data)
                dispatch({ "type": "REGISTER_USER_FAILED", payload: error.response.data });
            });
    }
}