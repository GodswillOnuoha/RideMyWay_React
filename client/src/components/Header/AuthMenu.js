import React from 'react'
import { Link } from 'react-router-dom'

export default class AuthMenu extends React.Component {
    state = {
        showMobileMenu: false
    }

    toggleMobileMenu = () => {
        const { showMobileMenu } = this.state
        this.setState({ showMobileMenu: !showMobileMenu })
    }

    render() {
        const showMobileStyle = this.state.showMobileMenu ? { display: 'block' } : null
        return (<nav className="navbar">
            <div className="logo">
                <Link to="/" > <h2>Ride My Way </h2> </Link>
            </div>

            <div className="navbar-link" style={showMobileStyle}>
                <Link to="/login">Login</Link>
                <Link to="/register">Signup</Link>
            </div>
            <div id='mobileMenuIcon' onClick={this.toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        )
    }
}