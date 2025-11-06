import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.26.0.217:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
