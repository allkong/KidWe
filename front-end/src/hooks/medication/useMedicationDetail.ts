import {useQuery} from '@tanstack/react-query';
import {getMedicationDetail} from '@/apis/medication/getMedicationDetail';
import {KidOfMedication} from '@/types/medication/KidOfMedication';

export const useMedicationDetail = (medicationId: number) => {
  return useQuery<KidOfMedication, Error>({
    queryKey: ['medicationDetail', medicationId],
    queryFn: () => {
      return getMedicationDetail(medicationId);
    },
  });
};
