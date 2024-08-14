import {Comment} from '@/types/article/Comment';
import CommentCount from '@/components/atoms/Comment/CommentCount';
import CommentItem from '@/components/molecules/Board/CommentItem';

interface CommentSectionProps {
  commentCount: number;
  comments: Comment[];
}

const CommentSection = ({commentCount, comments}: CommentSectionProps) => {
  return (
    <div className="px-6 pt-3 space-y-6">
      <div className="text-sm">
        <CommentCount count={commentCount} />
      </div>
      {comments.map(comment => (
        <div key={comment.id}>
          <CommentItem
            profile={comment.picture}
            writer={comment.name}
            banName={comment.role}
            content={comment.content}
            date={comment.createdTime}
            onClick={() => {}}
          />
          {comment.childs.length > 0 && (
            <div className="pl-6 space-y-3">
              {comment.childs.map(reply => (
                <CommentItem
                  key={reply.id}
                  profile={reply.picture}
                  writer={reply.name}
                  banName={reply.role}
                  content={reply.content}
                  date={reply.createdTime}
                  onClick={() => {}}
                  isReply
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
