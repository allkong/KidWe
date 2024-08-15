import {useQuery} from '@tanstack/react-query';
import {getAnnouncementDetail} from '@/apis/announcement/getAnnouncementDetail';
import {ArticleOfAnnouncement} from '@/types/announcement/ArticleOfAnnouncement';

export const useAnnouncementDetail = (
  announcementId: string,
  memberId: number
) => {
  return useQuery<ArticleOfAnnouncement, Error>({
    queryKey: ['announcementDetail', announcementId, memberId],
    queryFn: () => {
      return getAnnouncementDetail(announcementId, memberId);
    },
  });
};
