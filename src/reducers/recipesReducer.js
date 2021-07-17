import {
  END_LOADING,
  FETCH_RECIPE,
  FETCH_RECIPES,
} from '../actions/types';

const INITIAL_STATE = {
  recipes: [],
  recipeInfo: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: true,
      };
    case FETCH_RECIPE:
      return {
        ...state,
        recipeInfo: action.payload,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
