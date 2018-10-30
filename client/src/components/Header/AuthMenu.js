import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthMenu() {
    return (<nav className="navbar">
        <div className="logo">
            <Link to="/" > <h2>Ride My Way </h2> </Link>
        </div>
        <div className="navbar-link">
            <Link to="/auth">Login/Sign Up</Link>
        </div>
    </nav>
    )
}