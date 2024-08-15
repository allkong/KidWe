import {useParams} from 'react-router-dom';

import {Comment} from '@/types/article/Comment';
import {ROLE_NAMES} from '@/constants/roleNames';
import {useDeleteDailyNoteComment} from '@/hooks/daily-note/useDeleteDailyNoteComment';
import {getMemberId} from '@/utils/userData';

import CommentCount from '@/components/atoms/Comment/CommentCount';
import CommentItem from '@/components/molecules/Board/CommentItem';

interface CommentSectionProps {
  commentCount: number;
  comments: Comment[];
  onReplyClick: (commentId: number) => void;
  selectedCommentId: number;
}

const CommentSection = ({
  commentCount,
  comments,
  onReplyClick,
  selectedCommentId,
}: CommentSectionProps) => {
  const {dailyNoteId} = useParams();
  const deleteMutation = useDeleteDailyNoteComment();

  const handleDeleteComment = (commentId: number) => {
    deleteMutation.mutate({
      memberId: getMemberId()!,
      dailyNoteId: Number(dailyNoteId),
      dailyNoteCommentId: commentId,
    });
  };

  return (
    <div className="px-4 pt-3 mb-2 space-y-2">
      <div className="m-2 text-sm">
        <CommentCount count={commentCount} />
      </div>
      {comments.map(comment => (
        <div key={comment.id}>
          <CommentItem
            profile={comment.picture}
            writer={`${comment.name} ${ROLE_NAMES[comment.role]}`}
            banName={comment.banName}
            content={comment.content}
            date={comment.createdTime}
            onClick={() => onReplyClick(comment.id)}
            isSelected={comment.id === selectedCommentId}
            canDelete={comment.canDelete}
            onDelete={() => handleDeleteComment(comment.id)}
          />
          {comment.childs.length > 0 && (
            <div className="pl-3 mt-4 space-y-4">
              {comment.childs.map(reply => (
                <CommentItem
                  key={reply.id}
                  profile={reply.picture}
                  writer={`${reply.name} ${ROLE_NAMES[reply.role]}`}
                  banName={reply.banName}
                  content={reply.content}
                  date={reply.createdTime}
                  onClick={() => onReplyClick(comment.id)}
                  isReply
                  canDelete={reply.canDelete}
                  onDelete={() => handleDeleteComment(Number(reply.id))}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
