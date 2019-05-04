import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck } from 'react-bootstrap';
import {
  redFlagInvestigation, redFlagRejected, redFlagResolved, redFlagDraft
} from '../../actions/stats';


const DashboardHeader = (props) => {
  useEffect(() => {
    props.redFlagDraft();
    props.redFlagInvestigation();
    props.redFlagRejected();
    props.redFlagResolved();
  }, []);

  return (
    <CardDeck>
      <Card>
        <Card.Header className="upper-case">Draft</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.redFlagDraft}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="upper-case">Resolved</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.redFlagResolved}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="upper-case">Investigation</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.redFlagInvestigation}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="upper-case">Rejected</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.redFlagRejected}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

const mapStateToProps = state => ({
  stat: state.statReducer
});

DashboardHeader.propTypes = {
  stat: PropTypes.object.isRequired,
  redFlagDraft: PropTypes.func.isRequired,
  redFlagInvestigation: PropTypes.func.isRequired,
  redFlagResolved: PropTypes.func.isRequired,
  redFlagRejected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  redFlagInvestigation, redFlagRejected, redFlagResolved, redFlagDraft
})(DashboardHeader);
