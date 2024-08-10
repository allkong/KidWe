import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import AuthorItem from '@/components/molecules/Item/AuthorItem';
import PostContent from '@/components/molecules/post/PostContent';
import InputBar from '@/components/organisms/Navigation/InputBar';
import ArticleTitle from '@/components/molecules/post/ArticleTitle';

const DailyNoteDetail = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="공지사항" buttonType="back" />
      <div className={containerHeaderClass}>
        <AuthorItem
          profile=""
          writer="햄스터반 선생님"
          date="2024-08-09 15:13"
          isEdit
        />
        <ArticleTitle title="여름이라 많이 덥네요~" />
        <PostContent content="<b>안녕하세요오옹</b></br><p>반갑습니당ㅎㅎㅎ</p>" />
      </div>
      <InputBar />
    </div>
  );
};

export default DailyNoteDetail;
