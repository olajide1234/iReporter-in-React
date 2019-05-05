
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SignedInAuth = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
      {...rest}
      render={props => (
        isLoggedIn
          ? <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
          : <Component {...props} />)}
    />
);


const mapStateToProps = state => ({
  user: state.user.currentUser,
  isLoggedIn: state.user.isLoggedIn,
});

SignedInAuth.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  component: PropTypes.element.isRequired
};


export default connect(() => mapStateToProps, {})(SignedInAuth);
