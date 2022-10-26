import axios from 'axios';

const api = axios.create({
  baseURL: 'https://woof-api.azurewebsites.net',
});

export default api;
