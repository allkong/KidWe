import {getKindergartenInfo} from '@/apis/kindergarten/getKindergartenInfo';
import {useQuery} from '@tanstack/react-query';
import type {GetKindergarten} from '@/types/kindergarten/GetKindergarten';
import {scheduleKeys} from '@/hooks/schedule/scheduleKeys';

export const useGetKindergartenInfo = (kindergartenId: number) => {
  const query = useQuery<GetKindergarten>({
    queryKey: scheduleKeys.kindergartenInfo(kindergartenId),
    queryFn: () => getKindergartenInfo(kindergartenId),
  });
  return query;
};
