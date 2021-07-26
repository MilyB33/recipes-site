import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CategoryItem = ({ name }) => {
  return (
    <li className="categories__item">
      <Link to={`/browse/${name}`} className="link categories__link">
        {name}
      </Link>
    </li>
  );
};

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
