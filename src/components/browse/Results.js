import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { BarLoader } from 'react-spinners';

const Results = ({ recipes, loading }) => {
  return (
    <section className="browse__results">
      {loading ? (
        <BarLoader />
      ) : (
        recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))
      )}
    </section>
  );
};

Results.propTypes = {
  recipes: PropTypes.array,
  loading: PropTypes.bool,
};

Results.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, null)(Results);
