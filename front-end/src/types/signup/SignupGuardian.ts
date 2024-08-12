import {Dayjs} from 'dayjs';
import {Gender} from '@/enum/gender';
export interface SignupGuardian {
  dto: {
    memberId: number;
    kindergartenId: number;
    banId: number;
    kidName: string;
    birthday: string;
    gender: Gender;
    allergies: string[];
    kindergartenName?: string;
    banName?: string;
  };
  picture: string;
}
