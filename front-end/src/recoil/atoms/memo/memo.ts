import {atom} from 'recoil';
import dayjs from 'dayjs';
import {PostMemo} from '@/types/memo/PostMemo';

export const memoState = atom<PostMemo>({
  key: 'memo',
  default: {
    updatedTime: dayjs().format('YYYY-MM-DD HH:mm'),
    lesson: '',
    kids: [],
    tags: [],
    content: '',
  },
});
