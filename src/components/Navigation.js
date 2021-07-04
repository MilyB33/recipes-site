import React, { Link } from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="" className="logo__link">
        <img
          src="./static/food-serving.png"
          alt="Site logo"
          className="logo"
        />
      </a>

      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="" className="link navigation__link">
            HOME
          </a>
        </li>
        <li className="navigation__item">
          <a href="" className="link navigation__link">
            BROWSE
          </a>
        </li>
        <li className="navigation__item">
          <a href="" className="link navigation__link">
            LOG IN
          </a>
        </li>
        <li className="navigation__item">
          <a href="" className="link navigation__link">
            REGISTER
          </a>
        </li>

        <li className="navigation__item">
          <a href="" className="link navigation__link">
            CONTACTS
          </a>
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
