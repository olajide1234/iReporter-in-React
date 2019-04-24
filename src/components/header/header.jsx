import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { user: { firstname } } = props;

  if (firstname) {
    return (
      <header className="header">
        <div className="container">
          <div className="header_branding">
            <h1 className="header_branding--text">
              <a className="header_branding--url" href="/">
                <span className="header_branding--highlight">i</span>
Reporter
              </a>
            </h1>
          </div>
          <nav className="header_nav">
            <p className="header_branding--url header_branding--url-signout header_branding--url-signout--in">
              Hi
              {' '}
              {firstname}
            </p>
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header_branding">
          <h1 className="header_branding--text">
            <a className="header_branding--url" href="index.html">
              <span className="header_branding--highlight">i</span>
Reporter
            </a>
          </h1>
        </div>
        <nav className="header_nav header_branding--url-signout--buttonnav">
          <button className="header_branding--url-signout--button">
            <a
                className="header_branding--url header_branding--url-signout"
                href="sign_up"
              >
                Sign up
            </a>
          </button>
        </nav>
        <nav className="header_nav">
          <a
              className="header_branding--url header_branding--url-signout header_branding--url-signout--in"
              href="sign_in"
            >
              SIGN IN
          </a>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

Header.propTypes = {
  user: PropTypes.object.isRequired
};


export default connect(mapStateToProps)(Header);
