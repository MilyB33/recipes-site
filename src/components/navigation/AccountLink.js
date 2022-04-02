import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AccountLink = ({ username, isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && (
        <div className="user__link">
          <Link
            to={`/account/${username}`}
            className="link navigation__link link--user"
          >
            Account
          </Link>
        </div>
      )}
    </>
  );
};

AccountLink.propTypes = {
  username: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.user?.username,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(AccountLink);
