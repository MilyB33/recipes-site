import React from 'react';
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
    cuisine: 'any',
    mealType: 'any',
    diet: 'any',
    intolerances: 'any',
  };

  componentDidMount() {
    const param = this.props.param;
    console.log(param);
    if (mealTypes.includes(param)) {
      this.setState({ mealType: param });
      return;
    }

    if (cuisines.includes(param)) {
      this.setState({ cuisine: param });
      return;
    }
  }

  onInputChange = (field, value) => {
    console.log(field, value);
    this.setState({ [field]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="browse-form" onSubmit={this.onSubmit}>
        <div className="browse-form__box">
          <label htmlFor="keyword">Keyword</label>
          <input
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

export default BrowseForm;
