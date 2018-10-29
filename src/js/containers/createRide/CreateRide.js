import React from 'react'

class CreateRide extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <nav className="navbar">
                    <div className="logo">
                        <a href="index.html" > <h2>Ride My Way </h2> </a>
                    </div>
                    <div className="navbar-link">
                        <a href="login.html">Login/Sign Up</a>
                    </div>
                </nav>

                <div id="content-wrapper">

                    <form className="form" id="create-rideform" action="" method='post'>
                        <h1 className="title">Offer a Ride</h1>
                        <div className="form-item">
                            <label htmlFor="boarding"> Boarding stop </label>
                            <input type="text" placeholder="eg. AP-Ikorodu" id="boarding" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="finalDest"> Final Destination </label>
                            <input type="text" placeholder="eg. Eko Hotels" id="finalDest" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="stops">  Possible stops </label>
                            <input type="text" placeholder="eg. Ojota, Fadeyi, CMS" id="stops" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="r_date"> Ride date </label>
                            <input type="date" placeholder="first name" id="r_date" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="r_time"> Ride time </label>
                            <input type="time" placeholder="last name" id="r_time" required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="v_type"> Vehicle type </label>
                            <input type="text" placeholder="eg. Toyota Cemry" id="v_type" required />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>

                </div>

                <footer>
                    <p>
                        Ride My Way &copy; 2018
            </p>
                </footer>

            </div>
        )
    }
}

export default CreateRide