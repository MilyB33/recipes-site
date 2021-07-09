import _ from 'lodash';
import getRecipes from '../api/spoon';
import { END_LOADING, FETCH_RECIPE, FETCH_RECIPES } from './types';

export const fetchRecipes = (data) => (dispatch) =>
  _fetchRecipes(data, dispatch);

const _fetchRecipes = _.memoize(async (data, dispatch) => {
  const { keyword, cuisine, mealType, diet, intolerances } = data;

  let searchString = new String();

  keyword &&
    (searchString = searchString.concat(`&query=${keyword}`));
  cuisine &&
    (searchString = searchString.concat(`&cuisine=${cuisine}`));
  mealType &&
    (searchString = searchString.concat(`&type=${mealType}`));
  diet && (searchString = searchString.concat(`&diet=${diet}`));
  intolerances &&
    (searchString = searchString.concat(
      `&intolerances=${intolerances}`
    ));

  const response = await getRecipes.get(
    `complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}&${searchString}&number=20`
  );

  dispatch({ type: FETCH_RECIPES, payload: response.data.results });
});

export const fetchRecipeInformation = (id) => async (dispatch) => {
  const response = await getRecipes.get(
    `${id}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}`
  );

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const endLoading = () => {
  return { type: END_LOADING };
};
