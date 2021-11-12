import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4444',
});

export { apiClient };