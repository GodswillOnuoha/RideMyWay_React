import axios from 'axios';

import {
    LOADING,
    ERROR,
    API_CALL_SUCCESS,
    CLEAR,
    FETCH_RIDES,
} from '../action.types/ride'

const API = process.env.RMW_API
const { token } = localStorage;
const error = (payload) => ({ type: ERROR, payload: payload })
const loading = (payload) => ({ type: LOADING, payload: payload })
const success = () => ({ type: API_CALL_SUCCESS })

// Create ride actions
const clear = () => ({ type: CLEAR })
const createRide = (ride) => (dispatch) => {
    dispatch(loading(true))
    return axios.post(`${__API__}/api/v1/users/rides`, ride, {
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
                dispatch(error(err.response.data.message)) :
                dispatch(error('network error'))
        });
}

// Fetch ride actions
const fetchRidesSuccess = (payload) => ({ type: FETCH_RIDES, payload })
const fetchRides = () => (dispatch) => {
    dispatch(loading(true))
    return axios.get(`${__API__}/api/v1/rides`, {
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
                dispatch(error(err.response.data.message)) :
                dispatch(error('network error'))
        });
}

//Join roide actions
const requestJoin = (rideId) => (dispatch) => {
    dispatch(loading(true))
    return axios.post(`${__API__}/api/v1/rides/${rideId}/requests`, {}, {
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
                dispatch(error(err.response.data.message)) :
                dispatch(error('network error'))
        });
}

const respondToJoinRequest = (rideId, requestId, accept) => (dispatch) => {
    dispatch(loading(true))
    return axios.put(`${__API__}/api/v1/users/rides/${rideId}/requests/${requestId}`, { accept }, {
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
                dispatch(error(err.response.data.message)) :
                dispatch(error('network error'))
        });
}

export const Ride = { createRide, clear, fetchRides, requestJoin, respondToJoinRequest }
