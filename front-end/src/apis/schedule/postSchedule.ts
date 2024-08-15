import axiosInstance from '@/apis/axiosInstance';
import type {PostSchedule} from '@/types/schedule/PostSchedule';

export const postSchedule = async (memberId: number, body: PostSchedule) => {
  const result = await axiosInstance.post(`/schedules/${memberId}`, body);
  return result.data;
};
