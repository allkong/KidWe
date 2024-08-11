import axiosInstance from '@/apis/axiosInstance';
import {GetKindergarten} from '@/types/kindergarten/GetKindergarten';

export const getKindergartenInfo = async (
  kindergartenId: number
): Promise<GetKindergarten> => {
  const result = await axiosInstance.get(`/kindergartens/${kindergartenId}`);
  return result.data;
};
