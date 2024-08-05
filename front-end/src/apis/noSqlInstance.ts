import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://i11a808.p.ssafy.io:8081/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

export default axiosInstance;
