import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeInformation } from '../../actions';
import Ingredients from './Ingredients';
import Tags from './Tags';
import Info from './Info';
import Instructions from './Instructions';
import Header from './Header';

class RecipeInfo extends Component {
  componentDidMount() {
    // if (_.isEmpty(this.props.recipeInfo))
    this.props.fetchRecipeInformation(this.props.match.params.id);
  }

  componentDidUpdate() {
    // this.props.fetchRecipeInformation(this.props.match.params.id);
  }

  render() {
    const recipeInfo = this.props.recipeInfo;

    return (
      <section className="recipe">
        <Header recipe={recipeInfo} />
        <Tags
          diets={recipeInfo.diets}
          dishTypes={recipeInfo.dishTypes}
          cuisines={recipeInfo.cuisines}
        />

        <Ingredients ingredients={recipeInfo.extendedIngredients} />
        <Instructions />
        <Info recipe={recipeInfo} />
      </section>
    );
  }
}

RecipeInfo.propTypes = {
  fetchRecipeInformation: PropTypes.func.isRequired,
  recipeInfo: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { recipeInfo: state.recipes.recipeInfo };
};

export default connect(mapStateToProps, { fetchRecipeInformation })(
  RecipeInfo
);
