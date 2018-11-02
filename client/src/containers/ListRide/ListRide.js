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
        // history.push('/rides')
        window.location.reload();
    }

    setResponseAction = (ride) => {
        const { user } = this.props.auth

        const requests = JSON.parse(ride.joinrequests)
        if (requests.rejected.indexOf(user.username) > -1)
            return <span>rejected</span>

        if (requests.accepted.indexOf(user.username) > -1)
            return <span>accepted</span>

        if (requests.requests.indexOf(user.username) > -1)
            return <span>pending</span>
        return (
            <span>
                <span className='link' data-ride={JSON.stringify(ride)} data-rideid={ride.rideid}
                    onClick={this.handleJoineRide.bind(this)}>
                    <img width='26' src="https://res.cloudinary.com/dpnq32mzu/image/upload/v1540978992/Screenshot_2018-10-31_at_10.40.52_AM.png">
                    </img>
                </span>
                <span >  or  </span>
                <span style={{ color: 'green' }} data-ride={JSON.stringify(ride)} data-rideid={ride.rideid}
                    onClick={this.handleViewRide.bind(this)}><img width='24'
                        src="https://res.cloudinary.com/dpnq32mzu/image/upload/v1540978992/Screenshot_2018-10-31_at_10.40.39_AM.png"></img>
                </span>
            </span>
        )
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

                        <table className="viewTable sm">
                            <thead>
                                <tr>
                                    <th>Boarding Time</th>
                                    <th>Boarding Stop</th>
                                    <th>Destination</th>
                                    <th>Possible Stops </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rides.filter(ride => ride.userid !== auth.user.id).map(ride => {
                                    return (
                                        <tr key={ride.rideid} >
                                            <td data-column="Boarding Time">{ride.ridetime}</td>
                                            <td data-column="Boarding Stop">{ride.boardingstop}</td>
                                            <td data-column="Destination">{ride.finaldestination}</td>
                                            <td data-column="Possible Stops">{JSON.parse(ride.possiblestops).join(', ')}</td>
                                            <td data-column="Action">
                                                {this.setResponseAction(ride)}
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