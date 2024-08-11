import {atom} from 'recoil';

export const patchKidPictureState = atom<File | undefined>({
  key: 'patchKidPictureState',
  default: undefined,
});
