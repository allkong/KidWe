import {atom} from 'recoil';
import {SignupFormState} from '@/types/signup/SignupFormState';

export const Signup = atom<SignupFormState>({
  key: 'Signup',
  default: {
    member: {
      name: '',
      tel: '',
      email: '',
      password: '',
      role: '',
    },
    kindergarten: {
      name: '',
      address: '',
      addressDetail: '',
      zipCode: '',
      tel: '',
    },
    kid: {
      name: '',
      birthday: '',
      gender: '',
      allergies: [],
      picture: '',
      kindergartenId: 0,
      banId: 0,
    },
    ban: {
      kindergartenId: 0,
      banId: 0,
    },
  },
});
