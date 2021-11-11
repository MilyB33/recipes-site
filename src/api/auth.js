import axios from 'axios';

export default axios.create({
  baseURL: 'https://json-server-private.herokuapp.com',
  headers: {
    post: {
      // eslint-disable-next-line
      ['Content-Type']: 'application/json',
    },
  },
});
