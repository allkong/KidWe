import {memoState} from '@/recoil/atoms/memo/memo';
import {selector} from 'recoil';

export const memoTimeSelector = selector<string>({
  key: 'memoTime',
  get: ({get}) => {
    const memo = get(memoState);
    return memo.updatedTime;
  },
  set: ({get, set}, newValue) => {
    const memo = get(memoState);
    set(memoState, {...memo, updatedTime: newValue as string});
  },
});
