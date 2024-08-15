import {atom} from 'recoil';
import type {PatchUserInfo} from '@/types/user/PatchUserInfo';

export const patchUserInfoState = atom<PatchUserInfo>({
  key: 'patchUserInfoState',
  default: {
    dto: {
      id: 0,
      name: '',
      tel: '',
      password: '',
    },
    picture: '',
  },
});
