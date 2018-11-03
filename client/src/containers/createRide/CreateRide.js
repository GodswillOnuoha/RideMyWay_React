import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Ride } from '../../actions/ride'

class CreateRide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boardingStop: "",
            finalDestination: "",
            time: "",
            vehicleType: "",
            possibleStops: ""
        }
    }
    handleSuccess = () => {
        const { dispatch, history } = this.props
        dispatch(Ride.clear())
        history.push('/')
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value.trim() });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { dispatch } = this.props
        const date = document.getElementById('date').value.trim()
        dispatch(Ride.createRide({ ...this.state, date }))
    }

    render() {
        const { error, success } = this.props.ride
        success && this.handleSuccess()

        return (
            <div className="main-wrapper">
                <Header />
                <div id="content-wrapper">
                    <div id="create-ride-container">

                        <form className="form" id="create-rideform" onSubmit={this.handleSubmit}>
                            <h1 className="title">Offer a Ride</h1>
                            <div className="form-item">
                                <label htmlFor="boardingStop"> Boarding stop </label>
                                <input type="text" placeholder="eg. AP-Ikorodu" id="boardingStop" onChange={this.handleChange} required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="finalDestination"> Final Destination </label>
                                <input type="text" placeholder="eg. Eko Hotels" id="finalDestination" onChange={this.handleChange} required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="possibleStops">  Possible stops </label>
                                <input type="text" placeholder="eg. Ojota, Fadeyi, CMS" id="possibleStops" onChange={this.handleChange} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="date"> Ride date </label>
                                <input type="date" placeholder="first name" id="date" required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="time"> Ride time </label>
                                <input type="time" placeholder="last name" id="time" onMouseOut={this.handleChange} required />
                            </div>
                            <div className="form-item">
                                <label htmlFor="vehicleType"> Vehicle type </label>
                                <input type="text" placeholder="eg. Toyota Cemry" id="vehicleType" onChange={this.handleChange} required />
                            </div>
                            <div className="error">{error.message}</div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}


export default connect(state => state)(CreateRide)
