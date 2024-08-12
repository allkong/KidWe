import {atom} from 'recoil';

export const dailyNoteFormState = atom({
  key: 'dailyNoteForm',
  default: {
    post: {
      title: '제목입니다',
      content: '',
    },
    kidId: 0,
    sendTime: '',
  },
});
