import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const SignUp = (props) => {
  const {
    className, buttonText, variant, onClick
  } = props;

  return (
    <Button className={className} variant={variant} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

SignUp.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

SignUp.defaultProps = {
  className: ''
};

export default SignUp;
