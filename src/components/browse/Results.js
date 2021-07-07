import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';
import Recipe from './Recipe';

class Results extends React.Component {
  componentDidMount() {
    if (this.props.recipes.length === 0) {
      // Temporary to avoid to many request to api
      this.props.fetchRecipes();
    }
  }

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

export default connect(mapStateToProps, { fetchRecipes })(Results);
