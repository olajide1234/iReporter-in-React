import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Row, Col } from 'react-bootstrap';
import BoldHeader from '../components/boldHeader/boldHeader';
import * as componentData from '../store/componentData';
import SignInForm from '../components/form/signInForm';
import { signIn } from '../actions/actions';

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
      <section className="introduction introduction_signin_page">
        <div className="container_formpage">
          <div className="introduction_signup_and_signin">
            <BoldHeader
              textHeader={componentData.signInPageHeader.header}
              textBody={componentData.signInPageHeader.paragraph}
            />
          </div>
          <Row><Col md={{ span: 12 }}>{renderErrors(errors)}</Col></Row>
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

export default connect(() => ({}), mapDispatchProps)(SignInPage);
