import {atom} from 'recoil';
import type {PatchUserInfo} from '@/types/user/PatchUserInfo';

export const patchUserInfoState = atom<PatchUserInfo>({
  key: 'patchUserInfoState',
  default: {
    id: 0,
    name: '',
    tel: '',
    email: '',
    picture: '',
    password: '',
  },
});
