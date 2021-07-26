import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { BarLoader } from 'react-spinners';

class Results extends React.Component {
  renderRecipes = () => {
    return this.props.recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });
  };

  render() {
    return (
      <section className="browse__results">
        {this.props.loading ? <BarLoader /> : this.renderRecipes()}
      </section>
    );
  }
}

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
