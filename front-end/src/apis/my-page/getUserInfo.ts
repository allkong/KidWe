import axiosInstance from '@/apis/axiosInstance';
import type {GetUserInfo} from '@/types/user/GetUserInfo';

export const getUserInfo = async (): Promise<GetUserInfo> => {
  const result = await axiosInstance.get('/profile');
  return result.data;
};
