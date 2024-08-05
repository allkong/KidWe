import noSqlInstance from '@/apis/noSqlInstance';
import {Memo} from '@/types/memo/Memo';

export const postMemo = async (
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
