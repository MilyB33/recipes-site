import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';

const UserRecipes = ({ recipes }) => {
  const renderCards = () => {
    return recipes?.map((recipe) => {
      return <RecipeCard recipe={recipe} key={recipe.id} />;
    });
  };

  return <section className="user__recipes">{renderCards()}</section>;
};

UserRecipes.propTypes = {
  recipes: PropTypes.array,
};

UserRecipes.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state) => {
  return { recipes: state.auth.user?.likedRecipes };
};

export default connect(mapStateToProps, null)(UserRecipes);
