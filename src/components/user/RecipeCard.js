import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { unlikeRecipe } from '../../actions';
import { connect } from 'react-redux';

const RecipeCard = ({ recipe, unlikeRecipe, recipes, userId }) => {
  const { title, image, id } = recipe;

  return (
    <article className="user__recipe__card">
      <div className="user__recipe__image">
        <img src={image} alt="recipe" />
      </div>

      <h5 className="user__recipe__title">{title}</h5>

      <Link to={`/recipe/${id}`} className="user__recipe__link">
        More...
      </Link>

      <i
        className="fas fa-heart user__recipe__unlike"
        onClick={() => unlikeRecipe(id, userId, recipes)}
      />
    </article>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object,
  unlikeRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array,
  userId: PropTypes.number,
};

RecipeCard.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.user.id,
    recipes: state.auth.user.likedRecipes,
  };
};

export default connect(mapStateToProps, { unlikeRecipe })(RecipeCard);
