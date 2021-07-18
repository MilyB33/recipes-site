import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';
import SelectItem from './SelectItem';
import {
  cuisines,
  mealTypes,
  diets,
  intolerances,
} from '../../static/data';

class BrowseForm extends React.Component {
  state = {
    keyword: '',
    cuisine: '',
    mealType: '',
    diet: '',
    intolerances: '',
  };

  componentDidMount() {
    const param = this.props.param;

    if (mealTypes.includes(param)) {
      this.setState({ mealType: param });
    }

    if (cuisines.includes(param)) {
      this.setState({ cuisine: param });
    }
  }

  componentDidUpdate() {
    // this.props.fetchRecipes(this.state);
  }

  getRecipes() {
    if (this.props.recipes.length === 0) {
      this.props.fetchRecipes(this.state);
    }
  }

  onInputChange = (field, value) => {
    console.log(field, value);
    this.setState({ [field]: value === 'any' ? '' : value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchRecipes(this.state);
  };

  render() {
    return (
      <form className="browse-form" onSubmit={this.onSubmit}>
        <div className="browse-form__box">
          <label htmlFor="keyword">Keyword</label>
          <input
            className="input--browse"
            type="text"
            id="keyword"
            onChange={(e) =>
              this.onInputChange('keyword', e.target.value)
            }
          />
        </div>

        <SelectItem
          text="cuisine"
          data={cuisines}
          defaultValue={this.state.cuisine}
          id="cuisine"
          onChange={this.onInputChange}
        />
        <SelectItem
          text="type"
          data={mealTypes}
          defaultValue={this.state.mealType}
          id="mealType"
          onChange={this.onInputChange}
        />
        <SelectItem
          text="diet"
          data={diets}
          defaultValue={this.state.diet}
          id="diet"
          onChange={this.onInputChange}
        />
        <SelectItem
          text="intolerances"
          data={intolerances}
          defaultValue={this.state.intolerances}
          id="intolerances"
          onChange={this.onInputChange}
        />

        <input
          type="submit"
          value="Search"
          className="button button--browse"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes.recipes };
};

export default connect(mapStateToProps, { fetchRecipes })(BrowseForm);
