import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {getAccessToken} from '@/apis/login/getAccessToken';
import {getToken, setToken} from '@/utils/userToken';
import {ErrorCode} from '@/types/error/ErrorCode';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Cross Origin
  timeout: 3000,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = getToken();

  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  console.log('api config', config);

  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('server response', response);

    return response;
  },
  async error => {
    // Access token이 만료된 경우
    // Refresh token을 통해 Access token 발급 후 기존 api 재요청
    console.log('server error', error);

    const {code, status}: ErrorCode = error.response?.data || {};
    if (status === 401 && code === 'UNAUTHENTICATED_ACCESS_TOKEN') {
      console.log('Access Token 재발급 시작');

      const {accessToken} = await getAccessToken();
      setToken(accessToken);

      console.log('Access Token 재발급 완료');
      return axiosInstance(error.config);
    }

    throw error;
  }
);

export default axiosInstance;
