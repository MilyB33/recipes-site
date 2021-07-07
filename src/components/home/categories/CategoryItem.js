import React from 'react';
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

export default CategoryItem;
