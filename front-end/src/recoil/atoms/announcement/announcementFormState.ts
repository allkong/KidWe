import {atom} from 'recoil';
import type {VoteInfo} from '@/types/announcement/VoteInfo';

interface AnnouncementFormState {
  title: string;
  content: string;
  vote?: VoteInfo; // vote 필드를 추가합니다.
}

export const announcementFormState = atom<AnnouncementFormState>({
  key: 'announcementForm',
  default: {
    title: '',
    content: '',
    vote: undefined,
  },
});
