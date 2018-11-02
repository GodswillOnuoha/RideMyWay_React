import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    render() {
        const { user } = this.props
        const isLoggedIn = user === null;
        return (
            <div id="home-page-wrapper">
                <Header />
                <div id="home-container">
                    <div id="overlay">
                        <div id="overlay_pill">
                            <Link to="/users/rides">Offer a ride</Link>
                            <Link to="/rides">Join a ride</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default connect(state => state)(Home);
