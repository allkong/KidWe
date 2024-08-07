import {memoState} from '@/recoil/atoms/memo/memo';
import {Dayjs} from 'dayjs';
import {selector} from 'recoil';

export const memoTimeSelector = selector<Dayjs>({
  key: 'memoTime',
  get: ({get}) => {
    const memo = get(memoState);
    return memo.updatedTime;
  },
  set: ({get, set}, newValue) => {
    const memo = get(memoState);
    set(memoState, {...memo, updatedTime: newValue as Dayjs});
  },
});
