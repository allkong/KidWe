import {useParams} from 'react-router-dom';

import {useAnnouncementDetail} from '@/hooks/announcement/useAnnouncementDetail';
import {getFullImageSource} from '@/utils/getFullImageSource';
import {getMemberId} from '@/utils/userData';
import {containerHeaderClass} from '@/styles/styles';

import Header from '@/components/organisms/Navigation/Header';
import Author from '@/components/molecules/Board/Author';
import ArticleTitle from '@/components/molecules/Board/ArticleTitle';
import ArticleSection from '@/components/organisms/Board/ArticleSection';
// import CommentSection from '@/components/organisms/Board/CommentSection';
// import InputBar from '@/components/organisms/Navigation/InputBar';
import noProfile from '@/assets/no-profile.png';

const AnnounementDetail = () => {
  const {announcementId} = useParams();
  const {data} = useAnnouncementDetail(announcementId!, getMemberId()!);

  return (
    <div className="flex flex-col h-screen">
      <Header title="공지사항" buttonType="back" />
      <div className={containerHeaderClass}>
        <Author
          profile={getFullImageSource(data?.picture) || noProfile}
          writer="햄스터반 선생님"
          date={data?.post.createdDateTime || ''}
          isEdit={data?.canDelete}
        />
        <ArticleTitle title={data?.post.title || ''} />
        <ArticleSection
          content={data?.post.content || ''}
          images={data?.images || []}
        />
        {/* <CommentSection
          commentCount={data?.commentCount || 0}
          comments={data?.comments || []}
        /> */}
      </div>
      {/* <InputBar /> */}
    </div>
  );
};

export default AnnounementDetail;
