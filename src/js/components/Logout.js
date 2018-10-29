import React from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import { auth } from '../actions/auth';

// eslint disable experimentalDecorators

const Logout = (props) => {
    console.log('props: ', props)
    props.dispatch(auth.logoutUser())
    setTimeout(() => {
        console.log('------')
    }, 2000);
    return <Redirect to='/' />
}

export default connect((state) => Logout(state))