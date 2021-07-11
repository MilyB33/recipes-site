import {
  CLEAR_ERRORS,
  ERROR,
  LIKE_RECIPE,
  LOGIN,
  LOGOUT,
  REGISTER,
} from '../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: null,
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LIKE_RECIPE:
      return {
        ...state,
        user: {
          ...state.user,
          likedRecipes: [...state.user.likedRecipes, action.payload],
        },
      };
    default:
      return state;
  }
};
