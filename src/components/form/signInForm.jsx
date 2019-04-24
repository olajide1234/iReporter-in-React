import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({
      email,
      password
    });
  };

  render() {
    return (
      <div className="container_form">
        <form className="container_formfield" onSubmit={this.onSubmit}>
          <input
            className="container_formfield--text"
            type="text"
            placeholder="Your email"
            onChange={this.onChange}
            name="email"
          />
          <input
            className="container_formfield--text"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            name="password"
          />
          <input
            className="introduction_buttons introduction_buttons--signup-form"
            type="submit"
            value="Sign in"
          />
          <p className="container_formfield--redirectlinktext">
            New to iReporter? |
            <Link
              className="container_formfield--redirectlinktext container_formfield--redirectlink"
              to="/sign_up"
            >
              | Sign up
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignInForm;
