import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {selector} from 'recoil';

export const kidInfoAllergies = selector({
  key: 'kidInfoAllergies',
  get: ({get}) => {
    const data = get(patchKidInfoState);
    return data.dto.allergies;
  },
  set: ({get, set}, newValue) => {
    const data = get(patchKidInfoState);
    set(patchKidInfoState, {
      ...data,
      dto: {...data.dto, allergies: newValue as string[]},
    });
  },
});
