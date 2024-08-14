import axiosInstance from '@/apis/axiosInstance';
import {TeacherOfMemoInfo} from '@/types/daily-note/TeacherOfMemoInfo';

export const getTeacherMemoInfo = async (
  teacherId: number,
  kidId: number
): Promise<TeacherOfMemoInfo> => {
  try {
    const response = await axiosInstance.get(
      `dailynotes/${teacherId}/${kidId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
