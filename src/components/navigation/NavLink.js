import React from 'react';
import PropTypes from 'prop-types';
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

NavLinks.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLinks;
