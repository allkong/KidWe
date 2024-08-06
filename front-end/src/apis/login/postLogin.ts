import axiosInstance from '@/apis/axiosInstance';
import type {Login} from '@/types/login/Login';

export const postLogin = async (
  email: string,
  password: string
): Promise<{data: Login; status: number}> => {
  try {
    const response = await axiosInstance.post('/login', {email, password});
    console.log('서버의 응답은!!!:', response);
    return response;
  } catch (error) {
    console.debug(`login 전송 Error!!!: ${error}`);
    throw error;
  }
};
