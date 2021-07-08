import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchRecipeInformation } from '../../actions';
import Ingredients from './Ingredients';
import Tags from './Tags';

class RecipeInfo extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.recipeInfo))
      this.props.fetchRecipeInformation(this.props.match.params.id);
  }

  componentDidUpdate() {
    console.log(this.props.recipeInfo);
  }

  render() {
    const recipeInfo = this.props.recipeInfo;

    return (
      <div className="recipe">
        <Tags
          diets={recipeInfo.diets}
          dishTypes={recipeInfo.dishTypes}
          cuisines={recipeInfo.cuisines}
        />
        <header className="recipe__header">
          <img src={recipeInfo.image} alt="recipe" />
          <h1 className="recipe__title">{recipeInfo.title}</h1>
        </header>
        <div className="recipe__ingredients">
          <Ingredients ingredients={recipeInfo.extendedIngredients} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipeInfo: state.recipes.recipeInfo };
};

export default connect(mapStateToProps, { fetchRecipeInformation })(
  RecipeInfo
);
