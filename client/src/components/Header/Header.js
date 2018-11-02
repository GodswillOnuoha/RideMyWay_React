import React, { Fragment } from 'react'
import AuthMenu from './AuthMenu'
import Menu from './Menu'
import { connect } from 'react-redux'

const Header = (props) => {
    const { isLoggedIn } = props.auth

    const loadingStyle = (props.auth.loading || props.ride.loading) ?
        { display: 'block' } : { display: 'none' }

    let dispalyMenu = <AuthMenu />
    if (isLoggedIn) dispalyMenu = <Menu />

    return (
        <Fragment >
            {dispalyMenu}
            <div id='spinner-background' style={loadingStyle}>
                <div className='loader'></div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const { auth, ride } = state
    return {
        auth, ride
    }
}

export default connect(mapStateToProps)(Header)
