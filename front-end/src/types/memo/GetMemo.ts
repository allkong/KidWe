import {Tag} from '@/types/memo/Tag';
import {Kid as Child} from '@/types/memo/Kid';

export interface GetMemo {
  id: string;
  teacherId: number;
  updatedTime: string;
  lesson: string;
  kids: Child[];
  tags: Tag[];
  content: string;
}
