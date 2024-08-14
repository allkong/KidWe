import {atom} from 'recoil';

export const announcementFormState = atom({
  key: 'announcementForm',
  default: {
    title: '',
    content: '',
  },
});
