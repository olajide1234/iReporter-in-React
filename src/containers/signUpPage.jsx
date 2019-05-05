import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BoldHeader from '../components/boldHeader/boldHeader';
import * as componentData from '../store/componentData';
import SignUpForm from '../components/form/signUpForm';
import { addUser } from '../actions/actions';

const SignUpPage = (props) => {
  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  const submit = async (userData) => {
    props.addUser(userData).then((res) => {
      if (res.status === 400 || res.status === 401) {
        return setErrors([`${res.error || res.data}`]);
      }

      if (res.status === 201) {
        props.history.push('/dashboard');
      } else {
        return setErrors(['An error occured. Please try again later']);
      }
    });
  };

  return (
    <div>
      <section className="introduction introduction_signin_page">
        <div className="container_formpage">
          <div className="introduction_signup_and_signin">
            <BoldHeader
              textHeader={componentData.signUpPageHeader.header}
              textBody={componentData.signUpPageHeader.paragraph}
            />
          </div>
          <Row><Col md={{ span: 12 }}>{renderErrors(errors)}</Col></Row>
          <SignUpForm
            onSubmit={(userData) => { submit(userData); }}
          />
        </div>
      </section>
    </div>
  );
};

const mapDispatchProps = {
  addUser
};

SignUpPage.propTypes = {
  addUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(() => ({}), mapDispatchProps)(SignUpPage);
