import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import './alerts.css';

const Alerts = (props) => {
  const {
    show, message, variant, closeAlertModal
  } = props;

  return (
    <div className="d-flex justify-content-center">
      {show ? (
        <Alert className="alert-style" dismissible variant={variant} onClose={closeAlertModal}>
          {message}
        </Alert>
      ) : null}
    </div>
  );
};


Alerts.propTypes = {
  show: PropTypes.bool.isRequired,
  closeAlertModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Alerts;
