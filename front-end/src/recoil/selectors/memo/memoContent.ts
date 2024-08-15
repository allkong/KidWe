import {memoState} from '@/recoil/atoms/memo/memo';
import {selector} from 'recoil';

export const memoContentSelector = selector<string>({
  key: 'memoContent',
  get: ({get}) => {
    const memo = get(memoState);
    return memo.content;
  },
  set: ({get, set}, newValue) => {
    const memo = get(memoState);
    set(memoState, {...memo, content: newValue as string});
  },
});
