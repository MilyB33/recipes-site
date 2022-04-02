import React from 'react';
import { cuisines } from '../../../static/data';
import CategoryItem from './CategoryItem';

const Category = () => {
  return (
    <section className="categories">
      <h1>Categories:</h1>
      <ul className="categories__list">
        {cuisines.map(
          (cuisine) =>
            cuisine !== 'any' && (
              <CategoryItem name={cuisine} key={cuisine} />
            )
        )}
      </ul>
    </section>
  );
};

export default Category;
