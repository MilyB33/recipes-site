import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
          <Link to="/browse" className="link navigation__link">
            BROWSE
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/logIn" className="link navigation__link">
            LOG IN
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/register" className="link navigation__link">
            REGISTER
          </Link>
        </li>

        <li className="navigation__item">
          <Link to="/contact" className="link navigation__link">
            CONTACTS
          </Link>
        </li>
      </ul>

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

export default Navigation;
