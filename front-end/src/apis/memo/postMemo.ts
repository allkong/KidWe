import noSqlInstance from '@/apis/noSqlInstance';
import {PostMemo} from '@/types/memo/PostMemo';

export const postMemo = async (teacherId: number, memo: PostMemo) => {
  try {
    const result = await noSqlInstance.post(`/memo/${teacherId}`, {
      ...memo,
      updatedTime: memo.updatedTime,
    });
    return result.data;
  } catch (error) {
    console.debug(error);
    throw error;
  }
};
