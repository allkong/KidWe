import type {Bus} from '@/types/kindergarten/Bus';
import type {Ban} from '@/types/kindergarten/Ban';

export interface GetKindergarten {
  id: number;
  name: string;
  address: string;
  addressDetail: string;
  tel: string;
  bus: Bus;
  openDate: string; // Dayjs
  bans: Ban[];
}
