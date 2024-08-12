import {atom} from 'recoil';

export const dailyNoteFormState = atom({
  key: 'dailyNoteForm',
  default: {
    post: {
      title: '',
      content: '',
    },
    kidId: 0,
    sendTime: '',
  },
});
