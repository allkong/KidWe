import axiosInstance from '@/apis/axiosInstance';
import {TeacherInfo} from '@/types/management/TeacherInfo';

export const getTeacherPending = async (
  kindergartenId: number
): Promise<TeacherInfo[]> => {
  const result = await axiosInstance.get('/directors/teachers/pending', {
    params: {
      kindergartenId: kindergartenId,
    },
  });
  return result.data;
};
