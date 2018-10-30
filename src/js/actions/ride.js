import axios from 'axios';

import {
    LOADING,
    ERROR,
    CREAT_RIDE_SUCCESS,
    CLEAR,
    FETCH_RIDES
} from '../action.types/ride'

const API = process.env.RMW_API
const { token } = localStorage;

const error = (payload) => ({ type: ERROR, payload: payload })
const loading = (payload) => ({ type: LOADING, payload: payload })
const success = () => ({ type: CREAT_RIDE_SUCCESS })
const clear = () => ({ type: CLEAR })

const createRide = (ride) => (dispatch) => {
    dispatch(loading(true))
    axios.post(`${API}/api/v1/users/rides`, ride, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            dispatch(loading(false))
            dispatch(success());
        })
        .catch((err) => {
            dispatch(loading(false))
            err.response ?
                dispatch(error(err.response.data)) :
                dispatch(error('network error'))
        });
}


const fetchRidesSuccess = (payload) => ({ type: FETCH_RIDES, payload })
const fetchRides = () => (dispatch) => {
    dispatch(loading(true))
    axios.get(`${API}/api/v1/rides`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            dispatch(loading(false))
            dispatch(fetchRidesSuccess(response.data.rides));
        })
        .catch((err) => {
            dispatch(loading(false))
            err.response ?
                dispatch(error(err.response.data)) :
                dispatch(error('network error'))
        });
}

export const Ride = { createRide, clear, fetchRides }
