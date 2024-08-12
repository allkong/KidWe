import axiosInstance from '@/apis/axiosInstance';

export const patchUserInfo = async (body: FormData) => {
  const result = await axiosInstance.patch(`profile`, body);
  return result.data;
};
