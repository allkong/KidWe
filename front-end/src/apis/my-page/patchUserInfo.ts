import axiosInstance from '@/apis/axiosInstance';

export const patchUserInfo = async (body: FormData) => {
  const result = await axiosInstance.patch(`members/profile`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};
