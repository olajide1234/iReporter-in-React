import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SignUp = (props) => {
  const { link, className, buttonText } = props;

  return (
    <Link to={link}>
      <button className={className}>
        {buttonText}
      </button>
    </Link>
  );
};

SignUp.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

SignUp.defaultProps = {
  className: ''
};

export default SignUp;
