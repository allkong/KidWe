import {PatchKidInfo} from '@/types/user/PatchKidInfo';
import dayjs from 'dayjs';
import {atom} from 'recoil';

export const patchKidInfoState = atom<PatchKidInfo>({
  key: 'patchKidInfoState',
  default: {
    id: 0,
    name: '',
    birthday: dayjs().format('YYYY-MM-DD'),
    gender: 'MALE',
    allergies: [],
    picture: '',
    banId: 0,
    kindergartenId: 0,
  },
});
