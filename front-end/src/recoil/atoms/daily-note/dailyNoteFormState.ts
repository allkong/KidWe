import {atom} from 'recoil';

export const dailyNoteFormState = atom({
  key: 'dailyNoteForm',
  default: {
    kidId: 0,
    sendTime: '',
    content: '',
  },
});
