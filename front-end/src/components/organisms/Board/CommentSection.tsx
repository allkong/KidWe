import CommentCount from '@/components/atoms/Comment/CommentCount';
import CommentItem from '@/components/molecules/Board/CommentItem';

const CommentSection = () => {
  return (
    <div className="px-6 pt-3">
      <CommentCount count={8} />
      <CommentItem />
    </div>
  );
};

export default CommentSection;
