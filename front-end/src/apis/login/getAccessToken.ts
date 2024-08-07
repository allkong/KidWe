import {Token} from '@/types/login/Token';
import {AxiosInstance} from 'axios';

export const getAccessToken = async (
  instance: AxiosInstance
): Promise<Token> => {
  const result = await instance.post(``);
  return result.data;
};
