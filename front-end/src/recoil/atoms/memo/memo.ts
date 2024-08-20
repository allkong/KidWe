import {atom} from 'recoil';
import dayjs from 'dayjs';
import {PostMemo} from '@/types/memo/PostMemo';

export const memoState = atom<PostMemo>({
  key: 'memo',
  default: {
    // updatedTime: dayjs(),
    updatedTime: dayjs('2024-08-20 16:00'),
    lesson: '',
    kids: [],
    tags: [],
    content: '',
  },
});
