import axiosInstace from 'axios';

export interface PutDailyNoteParams {
  memberId: number;
  dailyNoteId: string;
  body: {
    kidId: number;
    content: string;
  };
}

export const putDailyNote = async ({
  memberId,
  dailyNoteId,
  body,
}: PutDailyNoteParams) => {
  const response = await axiosInstace.put(
    `/dailynotes/${memberId}/${dailyNoteId}`,
    body
  );
  return response.data;
};
