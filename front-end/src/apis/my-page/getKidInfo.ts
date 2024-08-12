import axiosInstance from '@/apis/axiosInstance';
import type {GetKidInfo} from '@/types/user/GetKidInfo';

export const getKidInfo = async (kidId: number): Promise<GetKidInfo> => {
  const result = await axiosInstance.get(`/kids/${kidId}`);
  return result.data;
};
