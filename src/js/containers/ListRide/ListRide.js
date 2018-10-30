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

    render() {
        const { rides } = this.props.ride
        console.log('ride: ', rides)
        return (
            <div className="main-wrapper">
                <Header />
                <div id="content-wrapper">

                    <div className="table_wrapper">
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
                                {rides.map(ride => {
                                    return (<tr key={ride.rideid}>
                                        <td>{ride.ridetime}</td>
                                        <td>{ride.boardingstop}</td>
                                        <td>{ride.finaldestination}</td>
                                        <td>{JSON.parse(ride.possiblestops).join(', ')}</td>
                                        <td><Link to=""><FaUserPlus /></Link> &nbsp; or &nbsp; <Link to="" style={{ color: 'green' }}><FaEye /></Link></td>
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