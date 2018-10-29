import React from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import { auth } from '../actions/auth';

const Logout = (props) => {
    props.dispatch(auth.logoutUser())
    return <Redirect to='/' />
}
export default connect((state) => state)(Logout)
