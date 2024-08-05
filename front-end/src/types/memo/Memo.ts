import {Kid} from '@/types/memo/Kid';
import {Tag} from '@/types/memo/Tag';

export interface Memo {
  updatedTime: string;
  lesson: string;
  kids: Kid[];
  tagRequestDtos: Tag[];
  content: string;
}
