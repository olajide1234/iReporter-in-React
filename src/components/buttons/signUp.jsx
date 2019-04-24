import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SignUp = (props) => {
  const { link, className, buttonText } = props;

  return (
    <Link to={link}>
      <button className={className}>
        {props.buttonText}
      </button>
    </Link>
  );
};

SignUp.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
};

export default SignUp;
