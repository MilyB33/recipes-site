import {
  FETCH_RECIPE,
  FETCH_RECIPES,
  START_LOADING,
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
        loading: false,
      };
    case FETCH_RECIPE:
      return {
        ...state,
        recipeInfo: action.payload,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
