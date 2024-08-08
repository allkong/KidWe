import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';
import {getAccessToken} from '@/apis/login/getAccessToken';
import {getToken, setToken} from '@/utils/userToken';
import {setUserData} from '@/utils/userData';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = getToken();

  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  console.log('config', config);

  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('server', response);

    return response;
  },
  async error => {
    // Access token이 만료된 경우
    // Refresh token을 통해 Access token 발급 후 기존 api 재요청
    const {config} = error;
    if (
      error.response?.status === 401 &&
      error.response?.data === 'Auth Error' &&
      !config._retry
    ) {
      try {
        console.log('Access Token 재발급 시작');

        config._retry = true;
        const {accessToken, ...userData} = await getAccessToken();
        setToken(accessToken);
        setUserData(userData);

        console.log('Access Token 재발급 완료');
        return axiosInstance(error.config);
      } catch (error) {
        if (isAxiosError(error) && error.response && error.status === 401) {
          // Refresh token 또한 만료된 경우
          // window.location.href = '/login';
          // return new Promise(() => {});
          throw error;
        }
      }
    }

    // 인가되지 않은 API에 접근한 경우
    else if (
      error.response?.status === 401 &&
      error.response?.data.message === 'UNAUTHORIZED_ACCESS'
    ) {
      // window.location.href = '/';
      // return new Promise(() => {});
      throw error;
    }
    throw error;
  }
);

export default axiosInstance;
