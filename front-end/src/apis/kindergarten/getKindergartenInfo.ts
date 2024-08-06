import axiosInstance from '@/apis/axiosInstance';
import {GetKindergarten} from '@/types/kindergarten/GetKindergarten';

export const getKindergartenInfo = async (
  kindergartenId: number
): Promise<GetKindergarten> => {
  try {
    const result = await axiosInstance.get(`/kindergartens/${kindergartenId}`);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
