import noSqlInstance from '@/apis/noSqlInstance';
import {PostMemo} from '@/types/memo/PostMemo';

export const putMemo = async (
  teacherId: number,
  memoId: string,
  memo: PostMemo
) => {
  const result = await noSqlInstance.put(`/memos/${teacherId}/${memoId}`, {
    ...memo,
    updatedTime: memo.updatedTime.format('YYYY-MM-DD HH:mm'),
  });
  return result.data;
};
