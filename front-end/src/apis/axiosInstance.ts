import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {getAccessToken} from '@/apis/login/getAccessToken';
import {
  deleteAccessToken,
  getAccessToken as getToken,
  setAccessToken as setToken,
} from '@/utils/userAccessToken';
import {deleteRefreshToken} from '@/utils/userRefreshToken';
import {deleteUserData} from '@/utils/userData';
// import {ErrorCode} from '@/types/error/ErrorCode';

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

    const status = error.response.status;
    // const {code}: ErrorCode = error.response?.data || {};
    if (
      status === 401
      // && code === 'UNAUTHENTICATED_ACCESS_TOKEN'
    ) {
      console.log('Access Token 재발급 시작');
      try {
        const {accessToken} = await getAccessToken();
        setToken(accessToken);

        console.log('Access Token 재발급 완료');
        return axiosInstance(error.config);
      } catch (error) {
        // login page redirect
        deleteAccessToken();
        deleteRefreshToken();
        deleteUserData();
        window.location.href = '/login';
      }
    }

    throw error;
  }
);

export default axiosInstance;
