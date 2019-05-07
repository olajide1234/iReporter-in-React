import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { signOut } from '../../actions/actions';

const Header = (props) => {
  const { user: { firstname } } = props;

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    props.signOut();
    props.props.history.push('/');
  };

  if (firstname) {
    return (
      <header className="header">
        <div className="container">
          <div className="header_branding">
            <h1 className="header_branding--text">
              <Link to="/dashboard">
                <p className="header_branding--url">
                  <span className="header_branding--highlight">i</span>
                  Reporter
                </p>
              </Link>
            </h1>
          </div>
          <nav className="header_nav">
            <Button variant="secondary" onClick={logOut} className="header_branding--url header_branding--url-signout header_branding--url-signout--in ml-4 test-logout">
              SIGN OUT
            </Button>
          </nav>
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
            <Link to="/">
              <p className="header_branding--url">
                <span className="header_branding--highlight">i</span>
                Reporter
              </p>
            </Link>
          </h1>
        </div>
        <nav className="header_nav header_branding--url-signout--buttonnav">
          <Link to="/sign_up">
            <button className="header_branding--url-signout--button">
              <a
                className="header_branding--url header_branding--url-signout"
              >
                Sign up
              </a>
            </button>
          </Link>
        </nav>
        <nav className="header_nav">
          <Link to="/sign_in">
            <a
              className="header_branding--url header_branding--url-signout header_branding--url-signout--in"
            >
              SIGN IN
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.currentUser
});

Header.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
  props: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { signOut })(Header);
