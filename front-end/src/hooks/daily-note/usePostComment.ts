import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postComment, PostCommentPayload} from '@/apis/daily-note/postComment';

export const usePostComment = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostCommentPayload>({
    mutationFn: PostCommentPayload => postComment(PostCommentPayload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['dailyNoteDetail']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
