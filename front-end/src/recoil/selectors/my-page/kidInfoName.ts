import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {selector} from 'recoil';

export const kidInfoName = selector({
  key: 'kidInfoName',
  get: ({get}) => {
    const data = get(patchKidInfoState);
    return data.dto.name;
  },
  set: ({get, set}, newValue) => {
    const data = get(patchKidInfoState);
    set(patchKidInfoState, {
      ...data,
      dto: {...data.dto, name: newValue as string},
    });
  },
});
