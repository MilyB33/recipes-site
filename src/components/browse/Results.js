import React from 'react';
import { connect } from 'react-redux';
import { endLoading } from '../../actions';
import Recipe from './Recipe';
import { BarLoader } from 'react-spinners';

class Results extends React.Component {
  renderRecipes = () => {
    return this.props.recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });
  };

  componentDidUpdate() {
    if (this.props.recipes.length > 0) {
      this.props.endLoading();
    }
  }

  render() {
    return (
      <div className="browse__results">
        {this.props.loading ? <BarLoader /> : this.renderRecipes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, { endLoading })(Results);
