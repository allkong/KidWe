import {atom} from 'recoil';

export interface Member {
  name: string;
  tel: string;
  email: string;
  password: string;
  role: string;
}

export interface Kindergarten {
  name: string;
  address: string;
  addressDetail: string;
  zipCode: string;
  tel: string;
}
export interface Kid {
  name: string;
  birthday: string;
  gender: string;
  allergies: string[];
  picture: string;
  kindergartenId: number;
  banId: number;
}

export interface Ban {
  kindergartenId: number;
  banId: number;
}

export interface SignupFormStateProps {
  member: Member;
  kindergarten: Kindergarten;
  kid: Kid;
  ban: Ban;
}

export const signupFormState = atom<SignupFormStateProps>({
  key: 'signupFormState',
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
      allergies: [''],
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
