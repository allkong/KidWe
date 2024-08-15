import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  postAnnouncement,
  PostAnnouncementPayload,
} from '@/apis/announcement/postAnnouncement';

export const usePostAnnouncement = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostAnnouncementPayload>({
    mutationFn: PostAnnouncementPayload =>
      postAnnouncement(PostAnnouncementPayload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['announcementList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
