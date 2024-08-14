import axiosInstance from '@/apis/axiosInstance';
import type {PostBan} from '@/types/kindergarten/PostBan';

export const postBan = async (data: PostBan) => {
  try {
    const response = await axiosInstance.post('/directors/ban', data);
    return response.data;
  } catch (error) {
    console.error('반 등록 중 오류 발생:', error);
    throw error;
  }
};
