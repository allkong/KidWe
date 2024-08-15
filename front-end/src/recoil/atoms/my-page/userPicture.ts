import {atom} from 'recoil';

export const patchUserPictureState = atom<File | null>({
  key: 'patchUserPictureState',
  default: null,
});
