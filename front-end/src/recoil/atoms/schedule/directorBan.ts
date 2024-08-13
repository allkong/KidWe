import {atom} from 'recoil';

export const directorBanState = atom<number | null>({
  key: 'directorBanState',
  default: null,
});
