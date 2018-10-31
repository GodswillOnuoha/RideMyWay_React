import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { Ride } from '../../actions/ride'
import ListRide from '../ListRide/ListRide'


class JoinResponse extends React.Component {
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

    handleSuccess = () => {
        const { dispatch, history } = this.props
        dispatch(Ride.clear())
        history.push('/')
    }

    handleBack = () => {
        // const { dispatch, history } = this.props
        // dispatch(Ride.clear())
        // history.pop()
        this.setState({ back: true })
    }

    render() {
        const { rideObj } = this.props

        const { error, success } = this.props.ride
        success && this.handleSuccess()

        if (!rideObj) return (<p>invalid redirect</p>)

        if (this.state.back) return <ListRide />
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
                                </tr>


                                {requests.requests.map(req => {
                                    return (
                                        <tr key={req}  >
                                            <td>{req} <small>(requested)</small> </td>
                                            <td>2</td>
                                            <td>Software Enginer with xyz</td>
                                        </tr>
                                    )
                                })}

                                {requests.accepted.map(req => {
                                    return (
                                        <tr key={req}>
                                            <td>{req}  <small>(accepted)</small></td>
                                            <td>2</td>
                                            <td>football lover, Investement banker</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <button className="submit-btn join-btn" onClick={this.handleBack}>Back</button>
                        <button className="submit-btn join-btn" onClick={this.handleJoineRide}>Join Ride</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(state => state)(JoinResponse)
