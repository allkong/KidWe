import {atom} from 'recoil';
import {Kindergarten} from '@/types/signup/Kindergarten';
export const SignupDirectorState = atom<Kindergarten>({
  key: 'signupDirector',
  default: {
    memberId: 0,
    name: '',
    address: '',
    addressDetail: '',
    zipCode: '',
    tel: '',
  },
});
