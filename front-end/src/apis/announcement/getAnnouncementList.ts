import axiosInstance from '@/apis/axiosInstance';
import {AnnouncementItem} from '@/types/announce/AnnouncementItem';

export const getAnnouncementList = async (): Promise<AnnouncementItem[]> => {
  try {
    const response = await axiosInstance.get('/announcements/list/1', {});
    console.log('서버의 응답은!!!:', response);
    console.log('서버의 응답에서 내가 쓸 데이터!!!', response.data);
    return response.data;
  } catch (error) {
    console.debug(`login 전송 Error!!!: ${error}`);
    throw error;
  }
};
