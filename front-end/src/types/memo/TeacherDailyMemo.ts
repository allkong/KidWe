import type {Tag} from '@/types/memo/Tag';

export interface TeacherDailyNote {
  id: string;
  teacherId: number;
  updatedTime: string;
  lesson: string;
  kids: number[];
  tagResponseDtos: Tag[];
  content: string;
}
