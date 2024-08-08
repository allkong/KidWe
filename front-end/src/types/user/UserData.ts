export interface UserData {
  memberId: number;
  memberEmail: string;
  memberRole: 'ROLE_DIRECTOR' | 'ROLE_GUARDIAN' | 'ROLE_TEACHER';
  memberStatus: 'NOTHING' | 'DECLINE' | 'PENDING' | 'ACCEPT';
  kindergartenId: number | null;
  banId: number | null;
  kidIds: number[];
}
