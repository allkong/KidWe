import noSqlInstance from '@/apis/noSqlInstance';
import {PostMemo} from '@/types/memo/PostMemo';

export const putMemo = async (
  teacherId: number,
  memoId: string,
  memo: PostMemo
) => {
  try {
    const result = await noSqlInstance.put(`/memo/${teacherId}/${memoId}`, {
      ...memo,
      updatedTime: memo.updatedTime.format('YYYY-MM-DD HH:mm'),
    });
    return result.data;
  } catch (error) {
    console.debug(error);
    throw error;
  }
};
