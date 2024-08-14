import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  postAnnouncementComment,
  PostCommentPayload,
} from '@/apis/announcement/postAnnouncementComment';

export const usePostAnnouncementComment = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostCommentPayload>({
    mutationFn: PostCommentPayload =>
      postAnnouncementComment(PostCommentPayload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['announcementDetail']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
