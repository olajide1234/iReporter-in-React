import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card, Row, Col, Container, Form
} from 'react-bootstrap';
import SignUp from '../buttons/signUp';
import { editComment, editLocation, deleteRecord } from '../../actions/actions';
import Alerts from '../Alerts';
import ModalAlert from '../ModalAlert/modalAlert';


const FullRecord = (props) => {
  const { record, user: { id } } = props;

  const [comment, setComment] = useState({
    comment: ''
  });

  const [location, setLocation] = useState({
    location: ''
  });

  const [confirm, setConfirm] = useState({
    show: false
  });

  const [alertMessage, setAlertMessage] = useState({
    message: '',
    visibility: false
  });

  const onChange = (e) => {
    setComment({
      [e.target.name]: e.target.value
    });
  };

  const onChangeLocation = (e) => {
    setLocation({
      [e.target.name]: e.target.value
    });
  };

  const submit = async (NewComment, recordId) => {
    props.editComment(NewComment, recordId).then((res) => {
      if (res.type === 'error') { setAlertMessage({ message: `${res.message}`, visibility: true }); } else {
        setComment({ comment: '' });
        props.onEdit();
      }
    });
  };

  const submitLocation = async (NewLocation, recordId) => {
    props.editLocation(NewLocation, recordId).then((res) => {
      if (res.type === 'error') { setAlertMessage({ message: `${res.message}`, visibility: true }); } else {
        setLocation({ comment: '' });
        props.onEdit();
      }
    });
  };

  const onDelete = async (recordId) => {
    props.deleteRecord(recordId).then((res) => {
      if (res.type === 'error') { setAlertMessage({ message: `${res.message}`, visibility: true }); } else {
        props.history.push('/dashboard');
      }
    });
  };


  return (
    <>
      <Alerts
        message={alertMessage.message}
        show={alertMessage.visibility}
        closeAlertModal={() => setAlertMessage({ message: '', visibility: false })}
        variant="primary"
      />
      <ModalAlert
        show={confirm.show}
        confirm={() => onDelete(record.id)}
        cancel={() => setConfirm({ show: false })}
        confirmButton="Delete"
        warning="Are you sure you want to delete this record?"
      />
      <Card>
        <Card.Header className="upper-case">{record.status}</Card.Header>
        <Card.Body>
          <Card.Title className="text-center upper-case">{record.title}</Card.Title>
          <Container>
            <Row className="mb-5">
              <Col>
                {record.dateofincident}
              </Col>
              <Col className="upper-case">
                {record.type}
              </Col>
              <Col className="upper-case">
                {location.location
                  ? (
                    <Form>
                      <Form.Control as="textarea" rows="3" defaultValue={location.location} onChange={onChangeLocation} name="location" />
                    </Form>
                  )
                  : record.location}
              </Col>
            </Row>
          </Container>
          <Card.Text>
            {comment.comment
              ? (
                <Form>
                  <Form.Control as="textarea" rows="5" defaultValue={comment.comment} onChange={onChange} name="comment" />
                </Form>
              )
              : record.comment}
          </Card.Text>
          <Container>
            <Row className="mt-3">
              <Col>
                <img
                  src={`${record.images}`}
                  alt="Police corruption"
                  width="300"
                  height="200"
                />
              </Col>
              <Col>
                <iframe
                  title="Incident video"
                  width="200"
                  height="150"
                  src="https://www.youtube.com/embed/arodYGXdzlc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer>
          {(record.status === 'draft' && record.owner_id === id)
            ? (
              <>
                <Container>
                  <Row>
                    <Col>
                      {comment.comment
                        ? <SignUp buttonText="Save comments" onClick={() => { submit(comment.comment, record.id); }} />
                        : <SignUp buttonText="Edit comments" onClick={() => { setComment({ comment: record.comment }); }} />}
                    </Col>
                    <Col>
                      {location.location
                        ? <SignUp buttonText="Save location" onClick={() => { submitLocation(location.location, record.id); }} />
                        : <SignUp buttonText="Edit location" onClick={() => { setLocation({ location: record.location }); }} />}
                    </Col>
                    <Col>
                      <SignUp buttonText="Delete record" variant="danger" onClick={() => { setConfirm({ show: true }); }} />
                    </Col>
                  </Row>
                </Container>
              </>
            ) : null}
        </Card.Footer>
      </Card>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

FullRecord.propTypes = {
  record: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  editLocation: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { editComment, editLocation, deleteRecord })(FullRecord);
