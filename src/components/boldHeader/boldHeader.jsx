import React from 'react';
import PropTypes from 'prop-types';

const BoldHeader = (props) => {
  const { textHeader, textBody } = props;
  return (
    <section>
      <h2 className="introduction_signup_and_signin--header">{textHeader}</h2>
      <p className="introduction_signup_and_signin--body">{textBody}</p>
    </section>
  );
};

BoldHeader.propTypes = {
  textHeader: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
};

export default BoldHeader;
