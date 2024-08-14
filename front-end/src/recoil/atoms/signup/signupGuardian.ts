import {atom} from 'recoil';
import {SignupGuardian} from '@/types/signup/SignupGuardian';
import {Gender} from '@/enum/gender';
import dayjs from 'dayjs';
export const SignupGuardianState = atom<SignupGuardian>({
  key: 'signupGuardian',
  default: {
    dto: {
      memberId: 0,
      kindergartenId: 0,
      banId: 0,
      kidName: '',
      birthday: dayjs().toString(),
      gender: 'MALE' as Gender,
      allergies: [''],
    },
    picture: '',
  },
});
