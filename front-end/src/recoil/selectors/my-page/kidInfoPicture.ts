import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {selector} from 'recoil';

export const kidInfoPicture = selector({
  key: 'kidInfoProfile',
  get: ({get}) => {
    const data = get(patchKidInfoState);
    return data.picture;
  },
  set: ({get, set}, newValue) => {
    const data = get(patchKidInfoState);
    set(patchKidInfoState, {
      ...data,
      picture: newValue as string,
    });
  },
});
