import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';


const ModalAlert = (props) => {
  const {
    show, confirm, cancel, confirmButton, warning
  } = props;

  return (
    <>
      <Modal show={show} onHide={cancel}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm your action</Modal.Title>
        </Modal.Header>
        <Modal.Body>{warning}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancel}>
            Close
          </Button>
          <Button variant="primary" onClick={confirm}>
            {confirmButton}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalAlert.propTypes = {
  show: PropTypes.bool.isRequired,
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  confirmButton: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
};

export default ModalAlert;
