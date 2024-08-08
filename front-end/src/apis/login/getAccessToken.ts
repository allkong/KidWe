import {getCookie} from '@/utils/getCookie';
import {LoginResponse} from '@/types/login/LoginResponse';
import axios from 'axios';

export const getAccessToken = async (): Promise<LoginResponse> => {
  const refreshToken = `Bearer ${getCookie('refreshToken')}`;

  const result = await axios.post(
    `http://i11a808.p.ssafy.io:8080/refresh`,
    {},
    {
      headers: {
        Authorization: refreshToken,
      },
    }
  );
  return result.data;
};
