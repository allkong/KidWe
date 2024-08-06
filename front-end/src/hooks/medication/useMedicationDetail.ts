import {useQuery} from '@tanstack/react-query';
import {getMedicationDetail} from '@/apis/medication/getMedicationDetail';
import {kidOfMedication} from '@/types/medication/kidOfMedication';

export const useMedicationDetail = (medicationId: string) => {
  return useQuery<kidOfMedication, Error>({
    queryKey: ['medicationDetail', medicationId],
    queryFn: () => {
      return getMedicationDetail(medicationId);
    },
  });
};
