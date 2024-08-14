import noSqlInstance from '@/apis/noSqlInstance';
import type {TeacherOfMemoInfo} from '@/types/daily-note/TeacherOfMemoInfo';

export const postAutoDailyNote = async (
  teacherId: number,
  memoInfo: TeacherOfMemoInfo
): Promise<string> => {
  try {
    const response = await noSqlInstance.post(
      `dailynotecontents/${teacherId}`,
      memoInfo
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
