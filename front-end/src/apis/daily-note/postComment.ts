import axiosInstance from '@/apis/axiosInstance';

export interface PostCommentPayload {
  dailynoteId: string;
  memberId: number;
  content: string;
  parentCommentId: number;
}

export const postComment = async (
  payload: PostCommentPayload
): Promise<void> => {
  try {
    const {dailynoteId, memberId, content, parentCommentId} = payload;

    const response = await axiosInstance.post(
      `/dailynotecomments/${memberId}/${dailynoteId}`,
      {
        dailynoteId,
        memberId,
        content,
        parentCommentId,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
