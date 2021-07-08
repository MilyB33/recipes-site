import React from 'react';
import { Link } from 'react-router-dom';

const Tags = ({ diets, dishTypes, cuisines }) => {
  const renderList = (type) => {
    return type?.map((name, index) => {
      return (
        <Link key={index} to={`/browse/${name}`}>
          <p className="recipe__tags__list__item">{name}</p>
        </Link>
      );
    });
  };

  return (
    <div className="recipe__tags">
      <h2>Tags :</h2>
      <div className="recipe__tags__list">{renderList(diets)}</div>
      <div className="recipe__tags__list">
        {renderList(dishTypes)}
      </div>
      <div className="recipe__tags__list">{renderList(cuisines)}</div>
    </div>
  );
};

export default Tags;
