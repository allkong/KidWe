import {AxiosInstance} from 'axios';
import {getCookie} from '@/utils/getCookie';
import {LoginResponse} from '@/types/login/LoginResponse';

export const getAccessToken = async (
  instance: AxiosInstance
): Promise<LoginResponse> => {
  const refreshToken = `Bearer ${getCookie('refreshToken')}`;

  const result = await instance.post(
    `/refresh`,
    {},
    {
      headers: {
        Authorization: refreshToken,
      },
    }
  );
  return result.data;
};
