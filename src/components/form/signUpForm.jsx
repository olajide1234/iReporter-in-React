import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignUpForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
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
    const {
      firstname, lastname, username, email, password
    } = this.state;
    this.props.onSubmit({
      firstname,
      lastname,
      username,
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
            placeholder="First name"
            onChange={this.onChange}
            name="firstname"
          />
          <input
            className="container_formfield--text"
            type="text"
            placeholder="Last name"
            onChange={this.onChange}
            name="lastname"
          />
          <input
            className="container_formfield--text"
            type="text"
            placeholder="Email"
            onChange={this.onChange}
            name="email"
          />
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
            value="Sign up"
          />
          <p className="container_formfield--redirectlinktext">
            Already have an account? |
            <Link
              className="container_formfield--redirectlinktext container_formfield--redirectlink"
              to="/sign_in"
            >
              | Sign in
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
