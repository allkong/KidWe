import axiosInstance from '@/apis/axiosInstance';
import type {SignupFormState} from '@/types/signup/SignupFormState';

export const postSignup = async (
  data: SignupFormState
): Promise<SignupFormState[]> => {
  console.log('우선 data 형태를 볼게요:', data);
  try {
    const response = await axiosInstance.post('/signup', data);
    console.log('서버의 응답 :', response);
    return response.data;
  } catch (error) {
    console.debug(`postSignup 전송 Error!!!: ${error}`);
    throw error;
  }
};
