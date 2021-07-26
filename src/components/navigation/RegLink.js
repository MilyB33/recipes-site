import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

const RegLink = ({ logout, isAuthenticated }) => {
  return (
    <li className="navigation__item">
      {isAuthenticated ? (
        <Link
          to="/"
          className="link navigation__link logout"
          onClick={logout}
        >
          LOGOUT
        </Link>
      ) : (
        <Link to="/logIn" className="link navigation__link">
          LOG IN / REGISTER
        </Link>
      )}
    </li>
  );
};

RegLink.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(RegLink);
