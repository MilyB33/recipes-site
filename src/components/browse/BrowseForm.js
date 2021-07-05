import React from 'react';
import SelectItem from './SelectItem';
import {
  cuisines,
  mealTypes,
  diets,
  intolerances,
} from '../../static/data';

const BrowseForm = () => {
  return (
    <form className="browse-form">
      <div className="browse-form__box">
        <label htmlFor="keyword">Keyword</label>
        <input type="text" id="keyword" />
      </div>

      <SelectItem text="cuisine" data={cuisines} />
      <SelectItem text="category" data={mealTypes} />
      <SelectItem text="diet" data={diets} />
      <SelectItem text="intolerances" data={intolerances} />

      <input
        type="submit"
        value="Search"
        className="button button--browse"
      />
    </form>
  );
};

export default BrowseForm;
