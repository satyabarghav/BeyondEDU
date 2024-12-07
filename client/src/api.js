// api.js
import axios from 'axios';

// Create an instance
const api = axios.create({
  baseURL: 'http://jfsd-sdp-server-production.up.railway.app', 
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwtToken');
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
