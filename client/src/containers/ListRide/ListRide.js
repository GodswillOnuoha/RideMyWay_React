import React from 'react'
import { FaUserPlus, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { Ride } from '../../actions/ride'


class ListRide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(Ride.fetchRides())
    }

    handleViewRide = () => {
        const { history, location } = this.props
        const id = location.hash.split('#')[1] // deirty blocker fix. (datasetempty) 
        location.hash = ""
        history.push(`/rides/${id}`)
    }

    handleJoineRide = (e) => {
        const { location, dispatch } = this.props
        const id = location.hash.split('#')[1] // deirty blocker fix. (datasetempty) 
        dispatch(Ride.requestJoin(id))

    }

    render() {
        const { rides } = this.props.ride
        const { auth } = this.props
        console.log('ride: ', this.props)
        return (
            <div className="main-wrapper">
                <Header />
                <div id="content-wrapper">

                    <div className="table_wrapper">
                        {this.props.ride.error && <div className='message-bar'>{this.props.ride.error}</div>}
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
                                    return (<tr key={ride.rideid}>
                                        <td>{ride.ridetime}</td>
                                        <td>{ride.boardingstop}</td>
                                        <td>{ride.finaldestination}</td>
                                        <td>{JSON.parse(ride.possiblestops).join(', ')}</td>
                                        <td >
                                            <a href={`#${ride.rideid}`} className='link' data-id={ride.rideid} onClick={this.handleJoineRide}><FaUserPlus /></a> &nbsp; or &nbsp;
                                            <a href={`#${ride.rideid}`} style={{ color: 'green' }} onClick={this.handleViewRide}><FaEye /></a>
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