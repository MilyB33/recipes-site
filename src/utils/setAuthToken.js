import axios from 'axios';
import auth from '../api/auth';

const setAuthToken = (token) => {
  if (token) {
    auth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete auth.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
