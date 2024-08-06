import {atom} from 'recoil';
import dayjs from 'dayjs';
import {Memo} from '@/types/memo/Memo';

export const memoState = atom<Memo>({
  key: 'memo',
  default: {
    updatedTime: dayjs(),
    lesson: '',
    kids: [],
    tagRequestDtos: [],
    content: '',
  },
});
