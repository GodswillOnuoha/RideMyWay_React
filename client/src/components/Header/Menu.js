import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'


export default class Menu extends React.Component {
    state = {
        showMobileMenu: false
    }

    toggleMobileMenu = () => {
        const { showMobileMenu } = this.state
        this.setState({ showMobileMenu: !showMobileMenu })
    }

    render() {
        const showMobileStyle = this.state.showMobileMenu ? { display: 'block' } : { display: 'none' }

        return (
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" > <h2>Ride My Way </h2> </Link>
                </div>

                <div className="navbar-link" style={showMobileStyle}>
                    <Link to="/logout">Logout</Link>
                    <Link to="/user/profile"><FaUser /> Profile</Link>
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
