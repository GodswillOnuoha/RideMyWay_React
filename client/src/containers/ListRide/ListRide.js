import React from 'react'
import { FaUserPlus, FaEye } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { Ride } from '../../actions/ride'
import RideDetail from '../RideDetail/RideDetail'


class ListRide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ride: {}
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(Ride.fetchRides())
    }

    handleViewRide = (e) => {
        const { ride } = e.target.parentNode.dataset
        this.setState({ ride: JSON.parse(ride) })
    }

    handleJoineRide = (e) => {
        const { dispatch } = this.props
        const { rideid } = e.target.parentNode.dataset

        if (rideid)
            dispatch(Ride.requestJoin(rideid))

    }

    handleSuccess = () => {
        const { dispatch, history } = this.props
        dispatch(Ride.clear())
        history.push('/')
    }

    render() {
        const { auth } = this.props
        const { error, rides, success } = this.props.ride

        success && this.handleSuccess()

        //redirect is a ride is selected
        if (this.state.ride.rideid)
            return <RideDetail rideObj={this.state.ride} />

        return (
            <div className="main-wrapper">
                <Header />
                <div id="content-wrapper">

                    <div className="table_wrapper">
                        {this.props.ride.error && <div className='message-bar'>{error}</div>}
                        <h1 className="title table-title">Available Ride Offers</h1>

                        <table className="viewTable">
                            <thead>
                                <tr>
                                    <th>Boarding Time</th>
                                    <th>Boarding Stop</th>
                                    <th>Final Destination</th>
                                    <th>Possible Stops </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rides.filter(ride => ride.userid !== auth.user.id).map(ride => {
                                    return (
                                        <tr key={ride.rideid} >
                                            <td>{ride.ridetime}</td>
                                            <td>{ride.boardingstop}</td>
                                            <td>{ride.finaldestination}</td>
                                            <td>{JSON.parse(ride.possiblestops).join(', ')}</td>
                                            <td >
                                                <span className='link' data-ride={JSON.stringify(ride)} data-rideid={ride.rideid}
                                                    onClick={this.handleJoineRide.bind(this)}>
                                                    <img width='26' src="https://res.cloudinary.com/dpnq32mzu/image/upload/v1540978992/Screenshot_2018-10-31_at_10.40.52_AM.png">
                                                    </img></span> &nbsp; <span >or</span> &nbsp;
                                                <span style={{ color: 'green' }} data-ride={JSON.stringify(ride)} data-rideid={ride.rideid} onClick={this.handleViewRide.bind(this)}><img width='26' src="https://res.cloudinary.com/dpnq32mzu/image/upload/v1540978992/Screenshot_2018-10-31_at_10.40.39_AM.png"></img></span>
                                            </td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(state => state)(ListRide)