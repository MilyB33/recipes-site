import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    post: {
      ['Content-Type']: 'application/json',
    },
  },
});
