import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { Ride } from '../../actions/ride'
import ListRide from '../ListRide/ListRide'
import Profile from '../Profile/Profile';
import { FaCheck, FaTimes } from 'react-icons/fa'



class RideDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            back: false
        }
    }

    handleJoineRide = (e) => {
        const { dispatch, rideObj } = this.props
        dispatch(Ride.requestJoin(rideObj.rideid))

    }

    acceptReject = (e, accept) => {
        const { dispatch } = this.props
        const { rideid, reqid } = e.target.dataset
        const requestId = parseInt(reqid, 10) + 1
        dispatch(Ride.respondToJoinRequest(rideid, requestId, accept))
    }

    handleReject = (e) => {
        this.acceptReject(e, 0)
    }

    handleAccept = (e) => {
        this.acceptReject(e, 1)
    }

    handleSuccess = () => {
        const { dispatch, history } = this.props
        dispatch(Ride.clear())
        history.push('/')
    }

    handleBack = () => {
        this.setState({ back: true })
    }

    render() {
        const { rideObj, owner } = this.props

        const { error, success } = this.props.ride
        success && this.handleSuccess()

        if (!rideObj) return (<p>invalid redirect</p>)

        if (this.state.back) {
            if (owner) {
                return <Profile />
            } else {
                return <ListRide />
            }
        }
        const requests = JSON.parse(rideObj.joinrequests)

        return (
            <div className="main-wrapper">
                <Header />

                <div id="content-wrapper">

                    <div className="table_wrapper details_card">
                        {this.props.ride.error && <div className='message-bar'>{error}</div>}
                        <h1 className="title table-title">Available Ride Offers</h1>

                        <span className="t_title">Ride Details</span>
                        <table className="details_table">
                            <tbody>
                                <tr><td>Boarding :</td><td>{rideObj.boardingstop}</td></tr>
                                <tr><td>Destination :</td><td>{rideObj.finaldestination}</td></tr>
                                <tr><td>Date :</td><td>{rideObj.ridedate}</td></tr>
                                <tr><td>Time :</td><td>{rideObj.ridetime}</td></tr>
                            </tbody>
                        </table>
                        <hr />

                        <span className="t_title">Users Joining the Ride </span>
                        <table >
                            <tbody>
                                <tr>
                                    <th>Username</th>
                                    <th>Rides taken</th>
                                    <th>About User </th>
                                    {owner ? <th>Action </th> : <th>Status </th>}
                                </tr>


                                {requests.requests.map(req => {
                                    return (
                                        <tr key={req}  >
                                            <td>{req} </td>
                                            <td>2</td>
                                            <td>Software Enginer with xyz</td>
                                            <td>{owner ?
                                                <span className='accep-reject' >
                                                    <span data-rideid={rideObj.rideid} data-reqid={requests.requests.indexOf(req)} onClick={this.handleReject}> <FaTimes />reject</span>
                                                    <span data-rideid={rideObj.rideid} data-reqid={requests.requests.indexOf(req)} onClick={this.handleAccept}> < FaCheck /> accept </span>
                                                </span> :
                                                <small>(pending)</small>}</td>
                                        </tr>
                                    )
                                })}

                                {requests.accepted.map(req => {
                                    return (
                                        <tr key={req}>
                                            <td>{req}  </td>
                                            <td>2</td>
                                            <td>football lover, Investement banker</td>
                                            <td><small>(accepted)</small></td>
                                        </tr>
                                    )
                                })}
                                {requests.rejected.map(req => {
                                    return (
                                        <tr key={req}>
                                            <td>{req}  </td>
                                            <td>2</td>
                                            <td>football lover, Investement banker</td>
                                            <td><small>(rejected)</small></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        {!owner && <button className="submit-btn join-btn" onClick={this.handleJoineRide}>Join Ride</button>}
                        <button className="submit-btn join-btn" onClick={this.handleBack}>Back</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(state => state)(RideDetail)
