import {atom} from 'recoil';

export const dailyNoteFormState = atom({
  key: 'dailyNoteForm',
  default: {
    content: '',
    kidId: 0,
    sendTime: '',
  },
});
