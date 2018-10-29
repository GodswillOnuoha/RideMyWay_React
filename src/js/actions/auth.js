import axios from 'axios';

import * as types from '../action.types/auth'

const API = process.env.RMW_API

const loading = (payload) => ({ type: types.LOADING, payload: payload })

const setLoggedIn = (user) => (dispatch) => {
    dispatch({ type: types.LOG_USER_IN, payload: user })
}

const logoutUser = () => (dispatch) => {
    localStorage.removeItem('user')
    dispatch({ type: types.LOG_USER_OUT })
}

const register = (user) => (dispatch) => {
    dispatch(loading(true))
    axios.post(`${API}/api/v1/auth/signup`, user)
        .then((response) => {
            localStorage.setItem("token", response.data.user.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            dispatch(loading(false))
            dispatch({ type: types.REGISTERATION_SUCCESS, payload: response.data });
        })
        .catch((error) => {
            dispatch(loading(false))
            error.response ?
                dispatch({ type: types.REGISTERATION_ERROR, payload: error.response.data }) :
                dispatch({ type: types.REGISTERATION_ERROR, payload: { error: 'network error' } })
        });
}

const login = (user) => (dispatch) => {
    dispatch(loading(true))
    axios.post(`${API}/api/v1/auth/login`, user)
        .then((response) => {
            dispatch(loading(false))
            localStorage.setItem("token", response.data.user.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            return dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
        })
        .catch((error) => {
            dispatch(loading(false))
            return error.response ?
                dispatch({ type: types.LOGIN_ERROR, payload: error.response.data }) :
                dispatch({ type: types.LOGIN_ERROR, payload: { error: 'network error' } })
        });
}



export const auth = { login, logoutUser, register, setLoggedIn }