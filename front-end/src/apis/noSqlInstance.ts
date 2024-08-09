import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MEMO_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

export default axiosInstance;
