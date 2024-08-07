import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
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
    // access token이 없음으로 인한 오류
    if (error.response?.status === 300 && !originalRequest._retry) {
      // acees token 재발급 요청
      // 만약 재발급 시 error가 발생한다면 기존 요청을 다시 보내지 않고 로그인 페이지로 redirect
      const {setToken} = jwtToken();
      originalRequest._retry = true;
      try {
        const {accessToken} = await getAccessToken(axiosInstance);
        setToken(accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(error.config);
      } catch (error) {
        // 권한 없음 오류로 redirect를 시켜준 후 Promise chain을 끊어주는 코드
        // window.location.href = '/';
        return new Promise(() => {});
      }
    }
    throw error;
  }
);

export default axiosInstance;
