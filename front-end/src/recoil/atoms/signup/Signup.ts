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
  },
});
