import axiosInstance from '@/apis/axiosInstance';

export interface PostReplyPayload {
  announcementCommentId: number;
  memberId: number;
  content: string;
}

export const postAnnouncementReply = async (
  payload: PostReplyPayload
): Promise<void> => {
  try {
    const {announcementCommentId, memberId, content} = payload;

    const response = await axiosInstance.post(
      `/announcement-comment/reply/${announcementCommentId}/${memberId}`,
      {content}
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
