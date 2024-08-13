import axiosInstance from '@/apis/axiosInstance';
import {Accept} from '@/types/management/Accept';

export const putTeacherPending = async (request: Accept): Promise<void> => {
  try {
    await axiosInstance.put('/directors/teachers/pending', request);
  } catch (error) {
    console.error('Failed to accept teacher', error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
