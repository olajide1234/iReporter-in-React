import React from 'react';
import { connect } from 'react-redux';
import BoldHeader from '../components/boldHeader/boldHeader';
import * as componentData from '../store/componentData';
import SignUpForm from '../components/form/signUpForm';
import { addUser } from '../actions/actions';

const SignUpPage = props => (
  <div>
    <section className="introduction introduction_signin_page">
      <div className="container_formpage">
        <div className="introduction_signup_and_signin">
          <BoldHeader
              textHeader={componentData.signUpPageHeader.header}
              textBody={componentData.signUpPageHeader.paragraph}
            />
        </div>
        <SignUpForm
            onSubmit={userData => props.addUser(userData).then((res) => {
              const { error } = res;
              if (error) {
                console.log(error.response.data);
              } else {
                props.history.push('/dashboard');
              }
            })}
          />
      </div>
    </section>
  </div>
);

const mapDispatchProps = {
  addUser
};

export default connect(() => ({}), mapDispatchProps)(SignUpPage);
