import axiosInstance from '@/apis/axiosInstance';
import {ChildInfo} from '@/types/management/ChildInfo';

export const getChildPending = async (
  kindergartenId: number
): Promise<ChildInfo[]> => {
  const result = await axiosInstance.get('/teachers/kids/pending', {
    params: {
      kindergartenId: kindergartenId,
    },
  });
  return result.data;
};
