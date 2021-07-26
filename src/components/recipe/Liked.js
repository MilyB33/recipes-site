import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
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
    console.log(typeof recipe.id);
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

Liked.propTypes = {
  userId: PropTypes.number,
  likeRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object,
  likedRecipes: PropTypes.array,
  unlikeRecipe: PropTypes.func.isRequired,
};

Liked.defaultProps = {
  likedRecipes: [],
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
