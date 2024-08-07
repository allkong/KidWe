import {Kid} from '@/types/memo/Kid';
import {Tag} from '@/types/memo/Tag';
import {Dayjs} from 'dayjs';

export interface PostMemo {
  updatedTime: Dayjs;
  lesson: string;
  kids: Kid[];
  tags: Tag[];
  content: string;
}
