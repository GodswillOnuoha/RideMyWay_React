import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


// eslint disable experimentalDecorators
@connect((store) => {
    return {
        user: store.users
    }
})
class Home extends React.Component {

    render() {
        const { user } = this.props
        const isLoggedIn = user.loggedIn;
        return (
            <div id="home-page-wrapper">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/" > <h2>Ride My Way </h2> </Link>
                    </div>

                    <div className="navbar-link">

                        {isLoggedIn ? <Link to="/profile">profile</Link> :
                            <Link to="/login">Login/Sign Up</Link>}

                    </div>
                </nav>

                <div id="home-container">
                    <div id="overlay">
                        <div id="overlay_pill">
                            <a href="create_ride.html">Offer a ride</a>
                            <a href="all_rides_view.html">Join a ride</a>
                        </div>
                    </div>
                </div>

                <footer id="home_footer">
                    <p>
                        Ride My Way &copy; 2018
                     </p>
                </footer>

            </div>

        )
    }
}

export default Home;
