import React from 'react';
import { connect } from 'react-redux';
import BoldHeader from '../components/boldHeader/boldHeader';
import * as componentData from '../store/componentData';
import SignInForm from '../components/form/signInForm';
import { signIn } from '../actions/actions';

const SignInPage = props => (
  <div>
    <section className="introduction introduction_signin_page">
      <div className="container_formpage">
        <div className="introduction_signup_and_signin">
          <BoldHeader
              textHeader={componentData.signInPageHeader.header}
              textBody={componentData.signInPageHeader.paragraph}
            />
        </div>
        <SignInForm
            onSubmit={userData => props.signIn(userData).then((res) => {
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
  signIn
};

export default connect(() => ({}), mapDispatchProps)(SignInPage);
