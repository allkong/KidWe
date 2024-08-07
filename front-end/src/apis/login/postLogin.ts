import axiosInstance from '@/apis/axiosInstance';
import type {Login} from '@/types/login/Login';

export const postLogin = async (
  email: string,
  password: string
): Promise<{data: Login; status: number}> => {
  console.log(email, password);
  try {
    const response = await axiosInstance.post('/login', {email, password});
    console.log('서버의 응답은!!!:', response);
    return response;
  } catch (error: any) {
    console.debug('login 전송 Error');
    if (error.response) {
      // 서버가 응답을 반환한 경우 (4xx, 5xx 등)
      console.debug(`서버가 응답을 반환한 경우!!!: ${error.response.data}`);
      console.debug(`Status: ${error.response.status}`);
      console.debug(`Headers: ${JSON.stringify(error.response.headers)}`);
    } else if (error.request) {
      // 요청이 전송되었으나 응답이 없는 경우
      console.debug(
        `요청이 전송되었지만 응답이 없는 경우!!!: No response received`
      );
      console.debug(error.request);
    } else {
      // 기타 오류
      console.debug(`기타 오류!!!: ${error.message}`);
    }
    throw error;
  }
  // try {
  //   const response = await axiosInstance.post('/login', {email, password});
  //   console.log('서버의 응답은!!!:', response);
  //   return response;
  // } catch (error) {
  //   console.debug(`login 전송 Error!!!: ${error}`);
  //   throw error;
  // }
};
