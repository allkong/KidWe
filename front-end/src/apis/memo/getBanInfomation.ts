import axiosInstance from '@/apis/axiosInstance';
import {BanInfomation} from '@/types/memo/BanInfomation';

export const getBanInfomation = async (
  banId: number
): Promise<BanInfomation> => {
  try {
    const result = await axiosInstance.get(`/bans/${banId}`);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
