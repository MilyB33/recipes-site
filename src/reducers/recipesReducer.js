import { FETCH_RECIPE, FETCH_RECIPES } from '../actions/types';

const INITIAL_STATE = {
  recipes: [],
  recipeInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case FETCH_RECIPE:
      return {
        ...state,
        recipeInfo: action.payload,
      };
    default:
      return state;
  }
};
