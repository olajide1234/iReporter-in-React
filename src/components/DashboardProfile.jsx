import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dashboard } from '../containers/dashboard';

const DashboardProfile = (props) => {
  const {
    user: {
      firstname, lastname, username, email, phoneNumber
    }
  } = props;

  return (
    <div className="motivation_box_profile motivation_box_profile_details">
      <h2 className="motivation_box_profile_details--initials">
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </h2>
      <h4 className="motivation_box_profile_details--text">
        {firstname}
        {lastname}
      </h4>
      <p className="motivation_box_profile_details--text">{username}</p>
      <p className="motivation_box_profile_details--text">{email}</p>
      <p className="motivation_box_profile_details--text">{phoneNumber}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

DashboardProfile.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(DashboardProfile);
