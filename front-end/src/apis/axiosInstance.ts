import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';
import {jwtToken} from '@/utils/jwtToken';
import {getAccessToken} from '@/apis/login/getAccessToken';

const axiosInstance = axios.create({
  baseURL: 'http://i11a808.p.ssafy.io:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const {getToken} = jwtToken();
  const accessToken = getToken();

  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    // Access token이 만료된 경우
    // Refresh token을 통해 Access token 발급 후 기존 api 재요청
    if (
      error.response?.status === 401 &&
      error.response?.data.message === 'UNAUTHENTICATED_EXPIRED_TOKEN' &&
      !originalRequest._retry
    ) {
      const {setToken} = jwtToken();
      originalRequest._retry = true;
      try {
        const {accessToken} = await getAccessToken(axiosInstance);
        setToken(accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`; // 필요 없는 코드?
        return axiosInstance(error.config);
      } catch (error) {
        if (isAxiosError<{message: string}>(error) && error.response) {
          const {status: errorStatus} = error;
          const {message: errorMessage} = error.response.data;

          // Refresh token 또한 만료된 경우
          if (
            errorStatus === 401 &&
            errorMessage === 'UNAUTHENTICATED_EXPIRED_REFRESH_TOKEN'
          ) {
            // 권한 없음 오류로 redirect를 시켜준 후 Promise chain 끊어주기
            window.location.href = '/login';
            return new Promise(() => {});
          }
        }
      }

      // 인가되지 않은 API에 접근한 경우
    } else if (
      error.response?.status === 401 &&
      error.response?.data.message === 'UNAUTHORIZED_ACCESS'
    ) {
      window.location.href = '/';
      return new Promise(() => {});
    }
    throw error;
  }
);

export default axiosInstance;
