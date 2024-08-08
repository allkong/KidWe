import {getTags} from '@/apis/memo/getTags';
import {useQuery} from '@tanstack/react-query';
import {Tag} from '@/types/memo/Tag';
import {memoKeys} from '@/hooks/memo/memoKeys';

export const useGetTags = (teacherId: number) => {
  const result = useQuery<Tag[]>({
    queryKey: memoKeys.tags(teacherId),
    queryFn: () => getTags(teacherId),
  });
  return result;
};
