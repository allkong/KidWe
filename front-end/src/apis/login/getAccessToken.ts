import axios from 'axios';
import {getCookie} from '@/utils/getCookie';

export const getAccessToken = async (): Promise<{accessToken: string}> => {
  console.log(document.cookie);

  const result = await axios.post(
    `${import.meta.env.VITE_API_URL}/refresh`,
    {},
    {
      headers: {
        refreshToken: `${getCookie('refreshToken')}`,
      },
    }
  );
  return result.data;
};
