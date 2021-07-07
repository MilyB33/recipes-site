import getRecipes from '../api/spoon';
import { FETCH_RECIPES } from './types';
export const fetchRecipes = () => async (dispatch) => {
  const response = await getRecipes.get(
    `?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=20`
  );

  dispatch({ type: FETCH_RECIPES, payload: response.data.results });
};
