import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignInForm extends Component {
  state = {
    username: '',
    password: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.onSubmit({
      username,
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
            placeholder="Username"
            onChange={this.onChange}
            name="username"
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

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignInForm;
