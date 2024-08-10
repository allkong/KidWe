export interface PatchKidInfo {
  id: number;
  name: string;
  birthday: string; // YYYY-MM-DD
  gender: 'MALE' | 'FEMALE';
  allergies: string[];
  picture: string;
  banId: number;
  kindergartenId: number;
}
