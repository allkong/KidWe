import axiosInstance from '@/apis/noSqlInstance';
import type {GetMemo} from '@/types/memo/GetMemo';

/**
 *
 * @param teacherId 선생님의 고유 id
 * @param year 조회년도
 * @param month 조회월
 * @param date 조회일
 * @returns 선생님이 작성한 일일 메모
 */
export const getTeacherDailyMemos = async (
  teacherId: number,
  year: string,
  month: string,
  date: string
): Promise<GetMemo[]> => {
  const response = await axiosInstance.get(
    `/memo/${teacherId}/${year}/${month}/${date}`
  );
  return response.data;
};
