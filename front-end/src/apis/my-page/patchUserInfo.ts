import axiosInstance from '@/apis/axiosInstance';
import type {PatchUserInfo} from '@/types/user/PatchUserInfo';

export const patchUserInfo = async (body: PatchUserInfo) => {
  const result = await axiosInstance.patch(`/profile`, body);
  return result.data;
};
