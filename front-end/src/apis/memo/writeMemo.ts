import noSqlInstance from '@/apis/noSqlInstance';
import {Memo} from '@/recoil/atoms/memo/memo';

export const writeMemo = async (
  teacherId: number,
  memo: Memo
): Promise<unknown> => {
  try {
    const result = await noSqlInstance.post(`/memo/${teacherId}`, memo);
    return result.data;
  } catch (error) {
    console.debug(error);
    return error;
  }
};
