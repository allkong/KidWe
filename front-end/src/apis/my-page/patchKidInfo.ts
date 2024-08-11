import axiosInstance from '@/apis/axiosInstance';
import type {PatchKidInfo} from '@/types/user/PatchKidInfo';

export const patchKidInfo = async (body: PatchKidInfo) => {
  const result = await axiosInstance.patch('/kids', body);
  return result.data;
};
