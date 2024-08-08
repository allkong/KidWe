import {useQuery} from '@tanstack/react-query';
import {
  getMedicationByTeacher,
  getMedicationByParent,
} from '@/apis/medication/getMedicationList';
import {MedicationItem} from '@/types/medication/MedicationItem';
import {RoleItem} from '@/enum/roleItem';

export const useMedicationList = (
  id: number,
  year: number,
  month: number,
  role: RoleItem
) => {
  return useQuery<MedicationItem[], Error>({
    queryKey: ['medicationList', id, year, month, role],
    queryFn: () => {
      if (role === RoleItem.Director || role === RoleItem.Teacher) {
        return getMedicationByTeacher(id, year, month);
      } else if (role === RoleItem.Guardian) {
        return getMedicationByParent(id, year, month);
      } else {
        return [];
      }
    },
  });
};
