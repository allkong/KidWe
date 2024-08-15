import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  postAnnouncementReply,
  PostReplyPayload,
} from '@/apis/announcement/postAnnouncementReply';

export const usePostAnnouncementReply = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostReplyPayload>({
    mutationFn: PostReplyPayload => postAnnouncementReply(PostReplyPayload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['announcementDetail']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
