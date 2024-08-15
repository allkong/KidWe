import axiosInstance from '@/apis/axiosInstance';

export interface PostCommentPayload {
  announcementId: string;
  memberId: number;
  content: string;
}

export const postAnnouncementComment = async (
  payload: PostCommentPayload
): Promise<void> => {
  try {
    const {announcementId, memberId, content} = payload;

    const response = await axiosInstance.post(
      `/announcement-comment/${announcementId}/${memberId}`,
      {content}
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
