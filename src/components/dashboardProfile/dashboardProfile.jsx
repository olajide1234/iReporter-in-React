import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const DashboardProfile = (props) => {
  const {
    user: {
      firstname, lastname, email
    }
  } = props;

  return (

    <Card>
      <Card.Body>
        <Card.Title>
          {' '}
          <h2 className="motivation_box_profile_details--initials">
            {firstname.charAt(0)}
            {lastname.charAt(0)}
          </h2>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{firstname}</ListGroupItem>
        <ListGroupItem>{email}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

DashboardProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(DashboardProfile);
