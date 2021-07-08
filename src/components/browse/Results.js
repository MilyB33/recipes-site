import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class Results extends React.Component {
  renderRecipes = () => {
    return this.props.recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });
  };

  render() {
    return (
      <div className="browse__results">{this.renderRecipes()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes.recipes };
};

export default connect(mapStateToProps, {})(Results);
