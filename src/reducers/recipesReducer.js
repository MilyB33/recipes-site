import {
  FETCH_RECIPE,
  FETCH_RECIPES,
  START_LOADING,
  END_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
  recipes: [],
  recipeInfo: {},
  loading: false,
};

// eslint-disable-next-line
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
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
