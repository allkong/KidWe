import type {Kid} from '@/types/memo/Kid';
import type {Teacher} from '@/types/kindergarten/Teacher';
export interface GetKindergarten {
  id: number;
  name: string;
  kids: Kid[];
  kidCount: number;
  teacher: Teacher[];
  teacherCount: number;
}
