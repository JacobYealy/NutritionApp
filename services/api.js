import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // This only runs when mongo server is established
});

export default api;
