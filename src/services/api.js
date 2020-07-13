import axios from 'axios';

const api = axios.create({
  baseURL: 'https://numsei-api.herokuapp.com',
});

export default api;
