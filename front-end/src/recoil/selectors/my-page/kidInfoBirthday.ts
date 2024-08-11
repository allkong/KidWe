import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {selector} from 'recoil';

export const kidInfoBirthday = selector({
  key: 'kidInfoBirthday',
  get: ({get}) => {
    const data = get(patchKidInfoState);
    return data.birthday;
  },
  set: ({get, set}, newValue) => {
    const data = get(patchKidInfoState);
    set(patchKidInfoState, {...data, birthday: newValue as string});
  },
});
