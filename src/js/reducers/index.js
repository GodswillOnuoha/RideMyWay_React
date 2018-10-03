import { combineReducers } from 'redux';
import rides from './rides'
import users from './users'

export default combineReducers({ rides, users });