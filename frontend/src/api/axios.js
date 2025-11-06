import axios from 'axios';

const api = axios.create({
  baseURL: 'https://claimbackend-pi.vercel.app/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
