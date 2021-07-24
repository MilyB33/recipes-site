import React, { Fragment, useRef } from 'react';
import { connect } from 'react-redux';
import { likeRecipe, unlikeRecipe } from '../../actions';
import { bounceOnClick } from '../../animations/animations';

const Liked = ({
  userId,
  likeRecipe,
  recipe,
  likedRecipes,
  unlikeRecipe,
}) => {
  const ref = useRef(null);

  const unlike = () => {
    bounceOnClick(
      ref.current,
      unlikeRecipe(recipe.id, userId, likedRecipes)
    );
  };

  const like = () => {
    bounceOnClick(
      ref.current,
      likeRecipe(
        recipe.id,
        recipe.title,
        recipe.image,
        userId,
        likedRecipes
      )
    );
  };

  return (
    <Fragment>
      {likedRecipes.some(
        (likedRecipe) => likedRecipe.id === recipe.id
      ) ? (
        <i
          ref={ref}
          className="fas fa-heart button--liked"
          onClick={unlike}
        />
      ) : (
        <i
          ref={ref}
          className="far fa-heart button--liked"
          onClick={like}
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
