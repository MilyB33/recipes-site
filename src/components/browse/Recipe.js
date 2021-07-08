import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe__card">
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt="recipe"
          className="recipe__image"
        />
        <p className="recipe__title">{recipe.title}</p>
      </Link>
    </div>
  );
};

export default Recipe;
