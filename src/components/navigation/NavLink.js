import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ url, text }) => {
  return (
    <li className="navigation__item">
      <Link to={url} className="link navigation__link">
        {text}
      </Link>
    </li>
  );
};

export default NavLinks;
