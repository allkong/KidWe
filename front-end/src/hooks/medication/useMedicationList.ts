import {useQuery} from '@tanstack/react-query';
import {
  getMedicationByTeacher,
  getMedicationByParent,
} from '@/apis/medication/getMedicationList';
import {MedicationItem} from '@/types/medication/MedicationItem';

export const useMedicationList = (
  banId: number,
  year: number,
  month: number,
  role: 'ROLE_DIRECTOR' | 'ROLE_TEACHER' | 'ROLE_GUARDIAN'
) => {
  return useQuery<MedicationItem[], Error>({
    queryKey: ['medicationList', banId, year, month, role],
    queryFn: () => {
      if (role === 'ROLE_DIRECTOR' || role === 'ROLE_TEACHER') {
        return getMedicationByTeacher(banId, year, month);
      } else if (role === 'ROLE_GUARDIAN') {
        return getMedicationByParent(banId, year, month);
      } else {
        return [];
      }
    },
  });
};
