import {KidAllergy} from '@/types/food/KidAllergy';
export interface GetFood {
  menuId: number;
  lunch: string;
  lunchAllergies: string[];
  kidAllergyListOfLunch: KidAllergy[];
  snack: string;
  snackAllergies: string[];
  kidAllergyListOfSnack: KidAllergy[];
  dinner: string;
  dinnerAllergies: string[];
  kidAllergyListOfDinner: KidAllergy[];
}
