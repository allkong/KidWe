import {Token} from '@/types/login/Token';
import {AxiosInstance} from 'axios';
import {getCookie} from '@/utils/getCookie';

export const getAccessToken = async (
  instance: AxiosInstance
): Promise<Token> => {
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
