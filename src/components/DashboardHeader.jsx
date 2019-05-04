import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const DashboardHeader = (props) => {
  const { records, status, type } = props;

  const filteredRecords = records.filter(
    record => record.status === status && record.type === type
  );

  return (
    <Card>
      <Card.Header className="upper-case">{status}</Card.Header>
      <Card.Body>
        <Card.Text>
          {filteredRecords.length}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = state => ({
  records: state.recordsReducer.records
});

DashboardHeader.propTypes = {
  records: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(DashboardHeader);
