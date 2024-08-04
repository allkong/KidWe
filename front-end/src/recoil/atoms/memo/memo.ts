import {atom} from 'recoil';
import type {Tag} from '@/types/memo/Tag';
import dayjs from 'dayjs';

export interface Kid {
  id: number;
  name: string;
}

export interface Memo {
  updatedTime: string;
  lesson: string;
  kids: Kid[];
  tagRequestDtos: Tag[];
  content: string;
}

export const memoState = atom<Memo>({
  key: 'memo',
  default: {
    updatedTime: dayjs().format('HH:mm'),
    lesson: '',
    kids: [],
    tagRequestDtos: [],
    content: '',
  },
});
