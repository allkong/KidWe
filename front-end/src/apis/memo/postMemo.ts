import noSqlInstance from '@/apis/noSqlInstance';
import {Memo} from '@/types/memo/Memo';

export const postMemo = async (teacherId: number, memo: Memo) => {
  try {
    const result = await noSqlInstance.post(`/memo/${teacherId}`, {
      ...memo,
      updatedTime: memo.updatedTime.format('YYYY-MM-DD HH:mm'),
    });
    return result.data;
  } catch (error) {
    console.debug(error);
    throw error;
  }
};
