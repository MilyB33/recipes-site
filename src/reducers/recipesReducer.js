import { FETCH_RECIPES } from '../actions/types';

const INITIAL_STATE = {
  recipes: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};
