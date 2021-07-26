import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cardAnimation } from '../../animations/animations';

const Recipe = ({ recipe }) => {
  const ref = useRef(null);

  useEffect(() => {
    cardAnimation(ref.current);
  }, []);

  return (
    <article className="recipe__card" ref={ref}>
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt="recipe"
          className="recipe__card__image"
        />
        <p className="recipe__card__title">{recipe.title}</p>
      </Link>
    </article>
  );
};

Recipe.propsTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
