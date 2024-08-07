import {memoState} from '@/recoil/atoms/memo/memo';
import {Kid} from '@/types/memo/Kid';
import {selector} from 'recoil';

export const memoKidsSelector = selector<Kid[]>({
  key: 'memoKids',
  get: ({get}) => {
    const memo = get(memoState);
    return memo.kids;
  },
  set: ({get, set}, newValue) => {
    const memo = get(memoState);
    set(memoState, {
      ...memo,
      kids: newValue as Kid[],
    });
  },
});
