import axiosInstance from '@/apis/axiosInstance';
import {ArticleOfAnnouncement} from '@/types/announcement/ArticleOfAnnouncement';

export const getAnnouncementDetail = async (
  announcementId: string,
  memberId: number
): Promise<ArticleOfAnnouncement> => {
  try {
    const response = await axiosInstance.get(
      `announcements/detail/${announcementId}?memberId=${memberId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
