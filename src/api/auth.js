import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    post: {
      // eslint-disable-next-line
      ['Content-Type']: 'application/json',
    },
  },
});
