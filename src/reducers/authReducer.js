import { ERROR, REGISTER } from '../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: null,
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
        error: action.payload,
      };
    default:
      return state;
  }
};
