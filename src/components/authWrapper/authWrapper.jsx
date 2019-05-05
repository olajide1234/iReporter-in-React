
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthWrapper = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/sign_in', state: { from: props.location } }} />)}
  />
);


const mapStateToProps = state => ({
  user: state.user.currentUser,
  isLoggedIn: state.user.isLoggedIn,
});

AuthWrapper.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  component: PropTypes.element.isRequired
};

export default connect(() => mapStateToProps, {})(AuthWrapper);
