import React from 'react';
import PropTypes from 'prop-types';
import Liked from './Liked';
import { connect } from 'react-redux';

const Header = ({ recipe, isAuthenticated }) => {
  return (
    <header className="recipe__header">
      <img
        src={recipe.image}
        alt="recipe"
        className="recipe__image"
      />
      <div className="recipe__header__box">
        {isAuthenticated && <Liked recipe={recipe} />}
        <h1 className="recipe__title">{recipe.title}</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  recipe: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, null)(Header);
