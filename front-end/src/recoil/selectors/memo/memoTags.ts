import {memoState} from '@/recoil/atoms/memo/memo';
import type {Tag} from '@/types/memo/Tag';
import {selector} from 'recoil';

export const memoTagsSelector = selector<Tag[]>({
  key: 'memoTags',
  get: ({get}) => {
    const memo = get(memoState);
    return memo.tags;
  },
  set: ({get, set}, newValue) => {
    const memo = get(memoState);
    set(memoState, {...memo, tags: newValue as Tag[]});
  },
});
