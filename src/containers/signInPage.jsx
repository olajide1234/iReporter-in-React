import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Alert, Row, Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import BoldHeader from '../components/boldHeader/boldHeader';
import * as componentData from '../store/componentData';
import SignInForm from '../components/form/signInForm';
import { signIn } from '../actions/actions';
import Header from '../components/header/header';

const SignInPage = (props) => {
  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  const submit = async (userData) => {
    props.signIn(userData).then((res) => {
      if (res.status === 401 || res.status === 400) {
        return setErrors([`${res.error || res.data}`]);
      }

      if (res.status === 200) {
        props.history.push('/dashboard');
      } else {
        return setErrors(['An error occured. Please try again later']);
      }
    });
  };


  return (
    <div>
      <Header props={props} />
      <section className="introduction introduction_signin_page">
        <div className="container_formpage">
          <div className="introduction_signup_and_signin">
            <BoldHeader
              textHeader={componentData.signInPageHeader.header}
              textBody={componentData.signInPageHeader.paragraph}
            />
          </div>
          <Row className="justify-content-md-center"><Col md={{ span: 6 }}>{renderErrors(errors)}</Col></Row>
          <SignInForm
            onSubmit={(userData) => { submit(userData); }}
          />
        </div>
      </section>
    </div>
  );
};

const mapDispatchProps = {
  signIn
};

SignInPage.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(() => ({}), mapDispatchProps)(SignInPage);
