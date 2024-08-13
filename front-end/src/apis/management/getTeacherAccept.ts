import axiosInstance from '@/apis/axiosInstance';
import {TeacherInfo} from '@/types/management/TeacherInfo';

export const getTeacherAccept = async (
  kindergartenId: number
): Promise<TeacherInfo[]> => {
  const result = await axiosInstance.get('/directors/teachers/accept', {
    params: {
      kindergartenId: kindergartenId,
    },
  });
  return result.data;
};
