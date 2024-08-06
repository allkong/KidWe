import {Kid} from '@/types/memo/Kid';
import {Tag} from '@/types/memo/Tag';
import {Dayjs} from 'dayjs';

export interface Memo {
  updatedTime: Dayjs;
  lesson: string;
  kids: Kid[];
  tagRequestDtos: Tag[];
  content: string;
}
