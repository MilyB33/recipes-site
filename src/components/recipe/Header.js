import React from 'react';
import Liked from './Liked';

const Header = ({ recipe }) => {
  return (
    <header className="recipe__header">
      <img
        src={recipe.image}
        alt="recipe"
        className="recipe__image"
      />
      <h1 className="recipe__title">
        {recipe.title} <Liked recipe={recipe} />
      </h1>
    </header>
  );
};

export default Header;
