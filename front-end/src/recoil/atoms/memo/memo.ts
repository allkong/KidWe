import {atom} from 'recoil';
import dayjs from 'dayjs';

export interface Kid {
  id: number;
  name: string;
}

export interface Tag {
  id: string;
  teacherId: number;
  content: string;
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
