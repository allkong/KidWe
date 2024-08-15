import axiosInstance from '@/apis/axiosInstance';
import {DailyNoteList} from '@/types/daily-note/DailyNoteList';

export const getDailyNoteByTeacher = async (
  banId: number,
  memberId: number,
  year: number,
  month: number
): Promise<DailyNoteList> => {
  try {
    const response = await axiosInstance.get(
      `dailynotes/ban/${banId}/${memberId}/${year}/${month}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDailyNoteByParent = async (
  kidId: number,
  memberId: number,
  year: number,
  month: number
): Promise<DailyNoteList> => {
  try {
    const response = await axiosInstance.get(
      `dailynotes/kid/${kidId}/${memberId}/${year}/${month}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
