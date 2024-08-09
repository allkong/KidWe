import {Dayjs} from 'dayjs';
import {Gender} from '@/enum/gender';
export interface SignupGuardian {
  memberId: number;
  kindergartenId: number;
  banId: number;
  kidName: string;
  birthday: string;
  gender: Gender;
  allergies: string[];
  picture: string;
  kindergartenName?: string;
  banName?: string;
}
