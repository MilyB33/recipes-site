import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import RegLink from './RegLink';
import AccountLink from './AccountLink';
import Socials from './Socials';

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
        <NavLink url="/" text="HOME" />
        <NavLink url="/browse/default" text="BROWSE" />
        <NavLink url="/contact" text="CONTACT" />
        <RegLink />
      </ul>

      <Socials />

      <AccountLink />
    </nav>
  );
};

export default Navigation;
