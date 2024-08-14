import {selector} from 'recoil';
import {dailyNoteFormState} from '@/recoil/atoms/daily-note/dailyNoteFormState';

export const dailyNoteKidSelector = selector<number | undefined>({
  key: 'dailyNoteKid',
  get: ({get}) => {
    const dailyNote = get(dailyNoteFormState);
    return dailyNote.kidId;
  },
  set: ({get, set}, newValue) => {
    const dailyNote = get(dailyNoteFormState);
    set(dailyNoteFormState, {
      ...dailyNote,
      kidId: newValue as number,
    });
  },
});
