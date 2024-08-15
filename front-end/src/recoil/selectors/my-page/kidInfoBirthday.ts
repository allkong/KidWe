import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {selector} from 'recoil';

export const kidInfoBirthday = selector({
  key: 'kidInfoBirthday',
  get: ({get}) => {
    const data = get(patchKidInfoState);
    return data.dto.birthday;
  },
  set: ({get, set}, newValue) => {
    const data = get(patchKidInfoState);
    set(patchKidInfoState, {
      ...data,
      dto: {...data.dto, birthday: newValue as string},
    });
  },
});
