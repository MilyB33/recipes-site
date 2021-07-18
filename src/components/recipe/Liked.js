import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { likeRecipe, unlikeRecipe } from '../../actions';

const Liked = ({
  userId,
  likeRecipe,
  recipe,
  likedRecipes,
  unlikeRecipe,
}) => {
  return (
    <Fragment>
      {likedRecipes.some(
        (likedRecipe) => likedRecipe.id === recipe.id
      ) ? (
        <i
          className="fas fa-heart button--liked"
          onClick={() =>
            unlikeRecipe(recipe.id, userId, likedRecipes)
          }
        />
      ) : (
        <i
          className="far fa-heart button--liked"
          onClick={() =>
            likeRecipe(
              recipe.id,
              recipe.title,
              recipe.image,
              userId,
              likedRecipes
            )
          }
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.user?.id,
    likedRecipes: state.auth.user.likedRecipes,
  };
};

export default connect(mapStateToProps, { likeRecipe, unlikeRecipe })(
  Liked
);
