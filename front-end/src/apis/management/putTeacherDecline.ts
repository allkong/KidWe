import axiosInstance from '@/apis/axiosInstance';

export const putTeacherDecline = async (teacherId: number): Promise<void> => {
  console.log('teacherId params', teacherId);
  try {
    await axiosInstance.put(`/directors/teachers/drop?teacherId=${teacherId}`);
  } catch (error) {
    console.error('Failed to decline teacher in axios', error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
