import React from 'react';
import { cuisines } from '../../../static/data';
import CategoryItem from './CategoryItem';

const Category = () => {
  const renderItems = () => {
    return cuisines.map((cuisine) => {
      return cuisine !== 'any' ? (
        <CategoryItem name={cuisine} key={cuisine} />
      ) : (
        ''
      );
    });
  };

  return (
    <section className="categories">
      <h1>Categories:</h1>
      <ul className="categories__list">{renderItems()}</ul>
    </section>
  );
};

export default Category;
