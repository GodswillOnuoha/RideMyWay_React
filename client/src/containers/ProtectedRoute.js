import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class ProtectedRoute extends React.Component {

  render() {
    const { component: ProtectedComponent, isLoggedIn, ...rest } = this.props
    return (
      <Route
        {...rest}

        render={props => (
          isLoggedIn
            ? <ProtectedComponent {...props} />
            : (
              <Redirect to={{
                pathname: '/auth',
                state: { from: props.location }
              }}
              />
            )
        )}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { isLoggedIn } = auth;
  return {
    isLoggedIn
  }
}
/*
  Set ProtectedRoute to be an impure component to allow rendering
  https: //stackoverflow.com/questions/43520498/react-router-private-routes-redirect-not-working
 */
export default connect(mapStateToProps, null, null, { pure: false })(ProtectedRoute);
