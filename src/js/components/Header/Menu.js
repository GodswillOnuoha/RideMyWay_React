import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../components/Logout'


export default function Menu() {

    const handleLogout = (event) => {
        event.preventDefault()
        console.log(event)
        logout(event.dispatch)
        console.log('after')
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" > <h2>Ride My Way </h2> </Link>
            </div>
            <div className="navbar-link">
                <Link to="/logout">Logout</Link>
            </div>
        </nav>
    )
}