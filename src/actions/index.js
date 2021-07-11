import _ from 'lodash';
import getRecipes from '../api/spoon';
import auth from '../api/auth';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import history from '../history';

import {
  CLEAR_ERRORS,
  END_LOADING,
  ERROR,
  FETCH_RECIPE,
  FETCH_RECIPES,
  LIKE_RECIPE,
  LOGIN,
  LOGOUT,
  REGISTER,
  UNLIKE_RECIPE,
} from './types';

// RECIPES ACTIONS

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

export const likeRecipe =
  (id, title, image, userId, recipes) => async (dispatch) => {
    console.log(id, title, image, userId, recipes);
    const response = await auth.put(`640/info/${userId}`, {
      likedRecipes: [...recipes, { id, title, image }],
      userId,
    });

    console.log(response);
    dispatch({ type: LIKE_RECIPE, payload: { id, title, image } });
  };

export const unlikeRecipe =
  (id, userId, recipes) => async (dispatch) => {
    console.log('yes');
    const response = await auth.put(`640/info/${userId}`, {
      likedRecipes: [...recipes.filter((recipe) => recipe.id !== id)],
      userId,
    });

    console.log(response);
    dispatch({ type: UNLIKE_RECIPE, payload: id });
  };

// USERS ACTIONS

export const register = (user) => async (dispatch) => {
  try {
    const response = await auth.post(
      '/register',
      JSON.stringify(user)
    );

    await auth.post(
      '/info',
      JSON.stringify({
        userId: user.id,
        likedRecipes: [],
      })
    );

    localStorage.setItem('token', response.data.accessToken);

    user = await _loadUserInfo(localStorage.token);

    dispatch({
      type: REGISTER,
      payload: {
        token: response.data.accessToken,
        user,
      },
    });

    history.push('/');
  } catch (err) {
    dispatch({ type: ERROR, payload: err.response.data });
    localStorage.removeItem('token');
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const response = await auth.post('/login', JSON.stringify(user));

    localStorage.setItem('token', response.data.accessToken);

    user = await _loadUserInfo(localStorage.token);
    console.log(user);
    dispatch({
      type: LOGIN,
      payload: {
        token: response.data.accessToken,
        user,
      },
    });

    history.push('/');
  } catch (err) {
    dispatch({ type: ERROR, payload: err.response.data });
    localStorage.removeItem('token');
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

const _loadUserInfo = async (token) => {
  setAuthToken(localStorage.token);

  const id = jwt_decode(token).sub;

  const response = await auth.get(`400/users/${id}`);

  const likedRecipes = await auth.get(`640/info/${id}`);
  console.log(likedRecipes);
  return {
    ..._.pick(response.data, ['email', 'username', 'id']),
    likedRecipes: likedRecipes.data.likedRecipes,
  };
};
