import React from 'react';

const CategoryItem = ({ name }) => {
  return (
    <li className="categories__item">
      <a href="" className="link categories__link">
        {name}
      </a>
    </li>
  );
};

export default CategoryItem;
