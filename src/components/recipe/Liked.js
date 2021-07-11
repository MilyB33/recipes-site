import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { likeRecipe } from '../../actions';

const Liked = ({ userId, likeRecipe, recipe, recipes }) => {
  return (
    <Fragment>
      <i
        className="far fa-heart"
        onClick={() =>
          likeRecipe(
            recipe.id,
            recipe.title,
            recipe.image,
            userId,
            recipes
          )
        }
      ></i>
      {/* <i class="fas fa-heart"></i> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.user.id,
    recipes: state.auth.user.likedRecipes,
  };
};

export default connect(mapStateToProps, { likeRecipe })(Liked);
