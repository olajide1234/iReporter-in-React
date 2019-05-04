import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardDeck } from 'react-bootstrap';
import {
  interventionInvestigation, interventionRejected, interventionResolved, interventionDraft
} from '../actions/stats';


const DashboardHeaderIntervention = (props) => {
  useEffect(() => {
    props.interventionDraft();
    props.interventionInvestigation();
    props.interventionRejected();
    props.interventionResolved();
  }, []);

  return (
    <CardDeck>
      <Card>
        <Card.Header className="upper-case">Draft</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.interventionDraft}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="upper-case">Resolved</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.interventionResolved}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="upper-case">Investigation</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.interventionInvestigation}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="upper-case">Rejected</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.stat.interventionRejected}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

const mapStateToProps = state => ({
  stat: state.statReducer
});

DashboardHeaderIntervention.propTypes = {
  interventionDraft: PropTypes.func.isRequired,
  interventionRejected: PropTypes.func.isRequired,
  interventionResolved: PropTypes.func.isRequired,
  interventionInvestigation: PropTypes.func.isRequired,
  stat: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  interventionInvestigation, interventionRejected, interventionResolved, interventionDraft
})(DashboardHeaderIntervention);
