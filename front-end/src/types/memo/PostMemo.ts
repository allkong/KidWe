import {Kid} from '@/types/memo/Kid';
import {Tag} from '@/types/memo/Tag';

export interface PostMemo {
  updatedTime: string;
  lesson: string;
  kids: Kid[];
  tags: Tag[];
  content: string;
}
