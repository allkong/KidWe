import {atom} from 'recoil';
import {SignupTeacher} from '@/types/signup/SignupTeacher';

export const SignupTeacherState = atom<SignupTeacher>({
  key: 'signupTeacher',
  default: {
    memberId: 0,
    kindergartenId: 0,
    banId: 0,
  },
});
