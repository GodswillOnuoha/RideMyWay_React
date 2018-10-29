import React from 'react'
import AuthMenu from './AuthMenu'
import Menu from './Menu'
import { connect } from 'react-redux'

const Header = (props) => {
    const { isLoggedIn } = props.auth

    let dispalyMenu = <AuthMenu />
    if (isLoggedIn) dispalyMenu = <Menu />

    return dispalyMenu
}

const mapStateToProps = (state) => {
    const { auth } = state
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header)
