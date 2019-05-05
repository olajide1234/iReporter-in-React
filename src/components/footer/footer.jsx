import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className }) => (
  <footer className={`footer ${className}`}>
    <p> iReporter &copy; 2019</p>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string.isRequired
};

export default Footer;
