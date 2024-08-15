import axiosInstance from '@/apis/axiosInstance';

export interface PostAnnouncementPayload {
  memberId: number;
  formData: FormData;
}

export const postAnnouncement = async (
  payload: PostAnnouncementPayload
): Promise<void> => {
  try {
    const {memberId, formData} = payload;

    const response = await axiosInstance.post(
      `announcements/${memberId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
