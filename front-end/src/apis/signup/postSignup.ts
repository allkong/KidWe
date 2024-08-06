import axiosInstance from '@/apis/axiosInstance';
import type {SignupFormState} from '@/types/signup/SignupFormState';

export const postSignup = async (
  data: SignupFormState
): Promise<SignupFormState[]> => {
  const postData: Partial<SignupFormState> = {
    member: data.member,
  };
  if (data.member.role === 'ROLE_DIRECTOR') {
    postData.kindergarten = data.kindergarten;
  } else if (data.member.role === 'ROLE_GURDIAN') {
    postData.kid = data.kid;
    postData.ban = data.ban;
  } else if (data.member.role === 'ROLE_TEACHER') {
    postData.ban = data.ban;
  }

  try {
    const response = await axiosInstance.post('/signup', postData);
    console.log('서버의 응답은!!!:', response);
    return response.data;
  } catch (error) {
    console.debug(`postSignup 전송 Error!!!: ${error}`);
    throw error;
  }
};
