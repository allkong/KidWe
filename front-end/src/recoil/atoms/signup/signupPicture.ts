import {atom} from 'recoil';

export const signupPictureState = atom<File | null>({
  key: 'signupPictureState',
  default: null,
});
