import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DashboardProfile = (props) => {
  const {
    user: {
      firstname, lastname, username, email, phonenumber
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
      <p className="motivation_box_profile_details--text">{phonenumber}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

DashboardProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(DashboardProfile);
