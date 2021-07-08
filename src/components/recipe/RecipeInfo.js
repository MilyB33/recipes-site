import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchRecipeInformation } from '../../actions';

class RecipeInfo extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.recipeInfo))
      this.props.fetchRecipeInformation(this.props.match.params.id);
  }

  componentDidUpdate() {
    console.log(this.props.recipeInfo);
  }

  render() {
    const id = this.props.match.params.id;
    return <div>RecipeInfo {id}</div>;
  }
}

const mapStateToProps = (state) => {
  return { recipeInfo: state.recipes.recipeInfo };
};

export default connect(mapStateToProps, { fetchRecipeInformation })(
  RecipeInfo
);
