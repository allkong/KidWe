import axiosInstance from '@/apis/axiosInstance';

interface DeleteDailyNoteParams {
  memberId: number;
  dailyNoteId: string;
}

export const deleteDailyNote = async ({
  memberId,
  dailyNoteId,
}: DeleteDailyNoteParams): Promise<void> => {
  try {
    const response = await axiosInstance.delete(
      `dailynotes/${memberId}/${dailyNoteId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
