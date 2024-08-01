import axiosInstance from '@/apis/axios';
import type {TeacherDailyNote} from '@/types/memo/TeacherDailyMemo';

/**
 *
 * @param teacherId 선생님의 고유 id
 * @param year 조회년도
 * @param month 조회월
 * @param day 조회일
 * @returns 선생님이 작성한 일일 메모
 */
export const getTeacherDailyMemos = async (
  teacherId: number,
  year: number,
  month: number,
  day: number
): Promise<TeacherDailyNote> => {
  try {
    const response = await axiosInstance.get(
      `/memo/${teacherId}/${year}/${month}/${day}`
    );
    return response.data;
  } catch (error) {
    console.debug(`error fetching getTeacherDailyMemos: ${error}`);
    throw error;
  }
};
