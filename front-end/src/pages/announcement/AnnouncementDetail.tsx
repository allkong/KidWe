import ArticleTitle from '@/components/organisms/Announcement/ArticleTitle';
import CommentItem from '@/components/molecules/Item/CommentItem';

const AnnouncementDetail = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-between items-center">
        <ArticleTitle
          title="안녕하세요"
          writer="어디 원장님"
          date={new Date()}
        />
      </div>
      <div className="text-left m-6 pb-16 border-b-2 border-gray-100 ">
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="m-6">
        <CommentItem
          classname="개나리반"
          content="저도 피곤해요"
          date={new Date()}
          writer="지서"
          onClick={() => {}}
        />
        <CommentItem
          classname="개나리반"
          content="저도 피곤해요"
          date={new Date()}
          isReply={true}
          writer="백승우"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AnnouncementDetail;
