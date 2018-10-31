import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../components/Logout'
import { FaUser } from 'react-icons/fa'


export default function Menu() {

    const handleLogout = (event) => {
        event.preventDefault()
        logout(event.dispatch)
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" > <h2>Ride My Way </h2> </Link>
            </div>
            <div className="navbar-link">
                <Link to="/logout">Logout</Link>
                <Link to="/user/profile"><FaUser /> Profile</Link>
            </div>
        </nav>
    )
}
