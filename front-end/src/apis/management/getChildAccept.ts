import axiosInstance from '@/apis/axiosInstance';
import {ChildInfo} from '@/types/management/ChildInfo';

export const getChildAccept = async (
  kindergartenId: number
): Promise<ChildInfo[]> => {
  const result = await axiosInstance.get('/teachers/kids/accept', {
    params: {
      kindergartenId: kindergartenId,
    },
  });
  return result.data;
};
