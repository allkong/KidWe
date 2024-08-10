import {useQuery} from '@tanstack/react-query';
import {getAnnouncementList} from '@/apis/announcement/getAnnouncementList';
import {AnnouncementItem} from '@/types/announcement/AnnouncementItem';

export const useAnnouncementList = (memberId: number) => {
  return useQuery<AnnouncementItem[], Error>({
    queryKey: ['leaveConsentList', memberId],
    queryFn: () => {
      return getAnnouncementList(memberId);
    },
  });
};
