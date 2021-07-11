import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

const Navigation = ({ isAuthenticated, logout, username }) => {
  return (
    <nav className="navigation">
      <Link to="/" className="logo__link">
        <img
          src="./static/food-serving.png"
          alt="Site logo"
          className="logo"
        />
      </Link>

      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="link navigation__link">
            HOME
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/browse/default"
            className="link navigation__link"
          >
            BROWSE
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/contact" className="link navigation__link">
            CONTACTS
          </Link>
        </li>
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
      </ul>

      {isAuthenticated && (
        <div className="user__link">
          <Link
            to="/logIn"
            className="link navigation__link link--user"
          >
            {`Logged: ${username}`}
          </Link>
        </div>
      )}

      <div className="socials">
        <a href="" className="link socials__link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="link socials__link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="link socials__link">
          <i className="fab fa-instagram-square"></i>
        </a>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.user?.username,
  };
};

export default connect(mapStateToProps, { logout })(Navigation);
