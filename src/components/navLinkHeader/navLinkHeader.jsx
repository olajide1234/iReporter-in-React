import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkHeader = (props) => {
  const { title } = props;
  return (
    <section className="introduction introduction_profile">
      <div className="container">
        <div className="introduction_signup_and_signin">
          <p>
            <Link
              className="introduction_signup_and_signin--header introduction_signup_and_signin--header_profile"
              to="/dashboard"
            >
              HOME
            </Link>
            {' '}
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};

NavLinkHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavLinkHeader;
