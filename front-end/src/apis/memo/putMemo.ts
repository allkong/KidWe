import noSqlInstance from '@/apis/noSqlInstance';
import {PostMemo} from '@/types/memo/PostMemo';

export const putMemo = async (
  teacherId: number,
  memoId: string,
  memo: PostMemo
) => {
  const body = {
    ...memo,
    updatedTime: memo.updatedTime.format('YYYY-MM-DD HH:mm'),
  };

  const result = await noSqlInstance.put(`/memos/${teacherId}/${memoId}`, body);
  return result.data;
};
