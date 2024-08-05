import type {Kid} from '@/types/memo/Kid';
import type {Teacher} from '@/types/memo/Teacher';

export interface BanInfomation {
  id: number;
  name: string;
  kids: Kid[];
  teachers: Teacher[];
}
