import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';
import SelectItem from './SelectItem';
import {
  cuisines,
  mealTypes,
  diets,
  intolerances,
} from '../../static/data';

const BrowseForm = ({ fetchRecipes, param }) => {
  const [filters, setFilters] = useState({
    keyword: '',
    cuisine: '',
    mealType: '',
    diet: '',
    intolerances: '',
  });

  const getRecipes = (onLoadFilters) => {
    fetchRecipes(onLoadFilters);
  };

  const onInputChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value === 'any' ? '' : value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(filters);
  };

  useEffect(() => {
    const onLoadFilters = { ...filters }; // localy filters beacuse state changes when function is done

    if (mealTypes.includes(param)) {
      setFilters({ ...filters, mealType: param });
      onLoadFilters.mealType = param;
    }

    if (cuisines.includes(param)) {
      setFilters({ ...filters, cuisine: param });
      onLoadFilters.cuisine = param;
    }

    getRecipes(onLoadFilters);

    // eslint-disable-next-line
  }, []);

  return (
    <form className="browse-form" onSubmit={onSubmit}>
      <div className="browse-form__box">
        <label htmlFor="keyword">Keyword</label>
        <input
          className="input--browse"
          type="text"
          id="keyword"
          placeholder="Keyword"
          onChange={(e) => onInputChange('keyword', e.target.value)}
        />
      </div>

      <SelectItem
        text="cuisine"
        data={cuisines}
        defaultValue={filters.cuisine}
        id="cuisine"
        onChange={onInputChange}
      />
      <SelectItem
        text="type"
        data={mealTypes}
        defaultValue={filters.mealType}
        id="mealType"
        onChange={onInputChange}
      />
      <SelectItem
        text="diet"
        data={diets}
        defaultValue={filters.diet}
        id="diet"
        onChange={onInputChange}
      />
      <SelectItem
        text="intolerances"
        data={intolerances}
        defaultValue={filters.intolerances}
        id="intolerances"
        onChange={onInputChange}
      />

      <input
        type="submit"
        value="Search"
        className="button button--browse"
      />
    </form>
  );
};

BrowseForm.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  param: PropTypes.string,
};

export default connect(null, { fetchRecipes })(BrowseForm);
