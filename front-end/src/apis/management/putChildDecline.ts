import axiosInstance from '@/apis/axiosInstance';

export const putChildDecline = async (kidId: number): Promise<void> => {
  console.log('kidId params', kidId);
  try {
    await axiosInstance.put(`/teachers/kids/drop?kidId=${kidId}`);
  } catch (error) {
    console.error('Failed to decline child in axios', error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
