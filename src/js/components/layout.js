import React from 'react';
import { connect } from 'react-redux';

// eslint disable experimentalDecorators
@connect((store) => {
    return {
        rides: store.rides.rides,
        fetched: store.rides.fetched
    }
})
class Layout extends React.Component {
    render() {
        const { rides } = this.props
        return (
            <div>
                Hello from Ride My Way
            <ul>
                    {rides.map(ride => {
                        return <li key={ride.id}> {ride.id} - {ride.destination} - {ride.boardingStop} </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Layout;
