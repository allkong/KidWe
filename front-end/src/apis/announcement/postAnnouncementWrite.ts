import type {AnnounncementWrite} from '@/types/announcement/AnnouncementWrite';
import axiosInstance from '@/apis/axiosInstance';

export const postAnnouncementWrite = async (
  data: AnnounncementWrite
): Promise<AnnounncementWrite> => {
  console.log('서버에 보낼 data는 post: data형식', data);
  try {
    const response = await axiosInstance.post('/announcements/1', {
      data,
    });
    console.log('서버의 응답은!!!:', response);
    return response.data;
  } catch (error) {
    console.debug(`login 전송 Error!!!: ${error}`);
    throw error;
  }
};
