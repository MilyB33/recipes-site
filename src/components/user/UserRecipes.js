import React from 'react';
import { connect } from 'react-redux';

import RecipeCard from './RecipeCard';
const UserRecipes = ({ recipes }) => {
  const renderCards = () => {
    console.log(recipes);
    return recipes.map((recipe) => {
      return <RecipeCard recipe={recipe} key={recipe.id} />;
    });
  };

  return <div className="user__recipes">{renderCards()}</div>;
};

const mapStateToProps = (state) => {
  return { recipes: state.auth.user?.likedRecipes };
};

export default connect(mapStateToProps, null)(UserRecipes);
