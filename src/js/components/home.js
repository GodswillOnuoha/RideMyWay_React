import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div id="home-page-wrapper">
                <nav className="navbar">
                    <div className="logo">
                        <a href="index.html" > <h2>Ride My Way </h2> </a>
                    </div>
                    <div className="navbar-link">
                        <a href="login.html">Login/Sign Up</a>
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
