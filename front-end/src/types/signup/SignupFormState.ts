import {Member} from '@/types/signup/Member';
import {Kindergarten} from '@/types/signup/Kindergarten';
import {Kid} from '@/types/signup/Kid';
import {Ban} from '@/types/signup/Ban';

export interface SignupFormState {
  member: Member;
  kindergarten: Kindergarten;
  kid: Kid;
  ban: Ban;
}
