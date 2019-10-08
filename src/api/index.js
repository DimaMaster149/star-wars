import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://swapi.co/api',
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('token');
    if(token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;