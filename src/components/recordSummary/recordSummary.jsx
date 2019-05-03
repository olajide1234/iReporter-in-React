import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, Row, Col, Container
} from 'react-bootstrap';
import { connect } from 'react-redux';

const RecordSummary = props => props.records.map(record => (
  <Link key={record.id} to={`/single/${record.id}`}>
    <>
      <Card>
        <Card.Header className="upper-case">
          {record.status}
          {' '}
          {record.owner_id === props.user.id ? <p className="float-right">Created by me</p> : null }
          {' '}
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center upper-case">
            {record.title}
            {' '}
          </Card.Title>
          <Container>
            <Row className="mb-5">
              <Col>
                {record.dateofincident}
              </Col>
              <Col className="upper-case">
                {record.type}
              </Col>
              <Col className="upper-case">
                {record.location}
              </Col>
            </Row>
          </Container>
          <Card.Text>
            {record.comment}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </>
  </Link>
));

const mapStateToProps = state => ({
  user: state.user.currentUser
});

RecordSummary.propTypes = {
  records: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(RecordSummary);
