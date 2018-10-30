import { combineReducers } from 'redux';
import ride from './ride'
import auth from './auth'

export default combineReducers({ ride, auth });