import axiosInstance from '@/apis/axiosInstance';
import {Accept} from '@/types/management/Accept';

export const putChildPending = async (request: Accept): Promise<void> => {
  try {
    await axiosInstance.put('/teachers/kids/pending', request);
  } catch (error) {
    console.error('Failed to accept kids', error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
