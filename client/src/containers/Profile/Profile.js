import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Ride } from '../../actions/ride'
import RideDetail from '../RideDetail/RideDetail'

class Profile extends React.Component {
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

    handleViewDetail = (e) => {
        const { ride } = e.target.parentNode.dataset
        this.setState({ ride: JSON.parse(ride) })
    }


    render() {
        const { rides } = this.props.ride
        const { user } = this.props.auth

        //redirect is a ride is selected
        if (this.state.ride.rideid)
            return <RideDetail
                rideObj={this.state.ride}
                owner={true}
            />


        return (

            <div className="main-wrapper">
                <Header />
                <div id="content-wrapper">

                    <div id="p_wrapper">

                        <div id="p_container1">
                            <div className="profile_image">
                                <img src="https://res.cloudinary.com/dpnq32mzu/image/upload/v1540982142/img1.png"></img>
                            </div>
                            <button type="submit" id="ch_p_image_btn">Change image</button>
                            <div id="about_user">
                                <h1>SamDay</h1>
                                <p>Football loving Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                            </div>
                        </div>

                        <aside id="p_container2">
                            <button type="submit" id="profile_edit_btn">Edit</button>
                            <h1>About</h1>
                            <div id="profile_t">
                                <table className="profile_t1" id="profile_t1">
                                    <tbody>
                                        <tr><td>First Name:</td><td>{user.firstname}</td></tr>
                                        <tr><td>User Name</td><td>{user.username}</td></tr>
                                        <tr><td>City</td><td>...</td></tr>
                                    </tbody>
                                </table>
                                <table className="profile_t2">
                                    <tbody>
                                        <tr><td>Last Name:</td><td>{user.lastname}</td></tr>
                                        <tr><td>Email</td><td>{user.email}</td></tr>
                                        <tr><td>State</td><td>Lagos</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr />

                            <h2>My Rides</h2>
                            <div id="total_rides">
                                <div id="ride_given">Total rides given: 0</div>
                                <div id="rides_taken">Total rides taken: 0</div><br />

                                <div className="table_wrapper">
                                    <h1 className="title table-title">Active Rides</h1>
                                    <table className="sm">
                                        <thead>
                                            <tr>
                                                <th>Departure Time</th>
                                                <th>Boarding Stop</th>
                                                <th>Destination</th>
                                                <th>Possible Stops </th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                rides.filter(ride => ride.userid === user.id
                                                ).map(ride => {
                                                    return (
                                                        <tr key={ride.rideid} >
                                                            <td data-column="Departure Time">{ride.ridetime}</td>
                                                            <td data-column="Boarding Stop">{ride.boardingstop}</td>
                                                            <td data-column="Destination">{ride.finaldestination}</td>
                                                            <td data-column="Possible Stops">{JSON.parse(ride.possiblestops).join(', ')}</td>
                                                            <td data-column="Action"><span className='link' data-ride={JSON.stringify(ride)}
                                                                onClick={this.handleViewDetail.bind(this)}>
                                                                <img width='26' src="https://res.cloudinary.com/dpnq32mzu/image/upload/v1540982262/Screenshot_2018-10-31_at_11.37.10_AM.png">
                                                                </img></span>
                                                            </td>
                                                        </tr>)
                                                })}


                                            {rides.filter(ride =>
                                                JSON.parse(ride.joinrequests).rejected.indexOf(user.username) > -1
                                            ).map(ride => {
                                                return (
                                                    <tr key={ride.rideid} >
                                                        <td data-column="Departure Time">{ride.ridetime}</td>
                                                        <td data-column="Boarding Stop">{ride.boardingstop}</td>
                                                        <td data-column="Destination">{ride.finaldestination}</td>
                                                        <td data-column="Possible Stops">{JSON.parse(ride.possiblestops).join(', ')}</td>
                                                        <td data-column="Action"><span>rejected</span></td>
                                                    </tr>)
                                            })}


                                            {rides.filter(ride =>
                                                JSON.parse(ride.joinrequests).accepted.indexOf(user.username) > -1
                                            ).map(ride => {
                                                return (
                                                    <tr key={ride.rideid} >
                                                        <td data-column="Departure Time">{ride.ridetime}</td>
                                                        <td data-column="Boarding Stop">{ride.boardingstop}</td>
                                                        <td data-column="Destination">{ride.finaldestination}</td>
                                                        <td data-column="Possible Stops">{JSON.parse(ride.possiblestops).join(', ')}</td>
                                                        <td data-column="Action"><span>accepted</span></td>
                                                    </tr>)
                                            })}


                                            {rides.filter(ride =>
                                                JSON.parse(ride.joinrequests).requests.indexOf(user.username) > -1
                                            ).map(ride => {
                                                return (
                                                    <tr key={ride.rideid} >
                                                        <td data-column="Departure Time">{ride.ridetime}</td>
                                                        <td data-column="Boarding Stop">{ride.boardingstop}</td>
                                                        <td data-column="Destination">{ride.finaldestination}</td>
                                                        <td data-column="Possible Stops">{JSON.parse(ride.possiblestops).join(', ')}</td>
                                                        <td data-column="Action"><span>pending</span></td>
                                                    </tr>)
                                            })}
                                        </tbody>
                                    </table>
                                </div><br />

                                <div className="table_wrapper">
                                    <h1 className="title table-title">Rides Taken</h1>
                                    <table className="sm">
                                        <thead>
                                            <tr>
                                                <th>Departure Time</th>
                                                <th>Boarding Stop</th>
                                                <th>Destination</th>
                                                <th>Possible Stops </th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="table_wrapper">
                                    <h1 className="title table-title">Rides given</h1>
                                    <table className="sm">
                                        <thead>
                                            <tr>
                                                <th>Departure Time</th>
                                                <th>Boarding Stop</th>
                                                <th>Destination</th>
                                                <th>Possible Stops </th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}
export default connect(state => state)(Profile)
