import axiosInstance from '@/apis/axiosInstance';
import {KidOfDailyNote} from '@/types/daily-note/KidOfDailyNote';

export const getDailyNoteDetail = async (
  memberId: number,
  dailyNoteId: string
): Promise<KidOfDailyNote> => {
  try {
    const response = await axiosInstance.get(
      `dailynotes/detail/${memberId}/${dailyNoteId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
