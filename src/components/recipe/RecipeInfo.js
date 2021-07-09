import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchRecipeInformation } from '../../actions';
import Ingredients from './Ingredients';
import Tags from './Tags';
import Info from './Info';
import Instructions from './Instructions';
import Header from './Header';

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
        <Header recipe={recipeInfo} />
        <Tags
          diets={recipeInfo.diets}
          dishTypes={recipeInfo.dishTypes}
          cuisines={recipeInfo.cuisines}
        />

        <Ingredients ingredients={recipeInfo.extendedIngredients} />
        <Instructions />
        <Info recipe={recipeInfo} />
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
