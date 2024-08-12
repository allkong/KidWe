import CommentCount from '@/components/atoms/Comment/CommentCount';
import CommentItem from '@/components/molecules/Board/CommentItem';

const CommentSection = () => {
  return (
    <div className="px-6 pt-3 space-y-6">
      <div className="text-sm">
        <CommentCount count={8} />
      </div>
      <CommentItem
        profile=""
        writer="박동환 학부모"
        banName="환타반"
        content="정말 좋은 내용이에요!"
        date="8.10 14:30"
        onClick={() => {}}
      />
      <CommentItem
        profile=""
        writer="박동환 학부모"
        banName="환타반"
        content="정말 좋은 내용이에요!"
        date="8.10 14:30"
        onClick={() => {}}
        isReply
      />
    </div>
  );
};

export default CommentSection;
