import {memoState} from '@/recoil/atoms/memo/memo';
import {selector} from 'recoil';

export const memoLessonSelector = selector<string>({
  key: 'memoLesson',
  get: ({get}) => {
    const memo = get(memoState);
    return memo.lesson;
  },
  set: ({get, set}, newValue) => {
    const memo = get(memoState);
    set(memoState, {...memo, lesson: newValue as string});
  },
});
