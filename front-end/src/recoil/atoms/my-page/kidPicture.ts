import {atom} from 'recoil';

export const patchKidPictureState = atom<File | null>({
  key: 'patchKidPictureState',
  default: null,
});
