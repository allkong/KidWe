import axiosInstance from '@/apis/axiosInstance';
import {GetKindergartenDetail} from '@/types/kindergarten/GetKindergartenDetail';

export const getKindergartenDetail = async (
  kindergartenId: number
): Promise<GetKindergartenDetail[]> => {
  const result = await axiosInstance.get(
    `/kindergartens/${kindergartenId}/detail`
  );
  return result.data;
};
