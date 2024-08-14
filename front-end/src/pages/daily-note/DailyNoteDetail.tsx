import {useParams} from 'react-router-dom';
import dayjs from 'dayjs';

import {useDailyNoteDetail} from '@/hooks/daily-note/useDailyNoteDetail';
import {usePostComment} from '@/hooks/daily-note/usePostComment';
import {containerHeaderClass} from '@/styles/styles';
import {getMemberId} from '@/utils/userData';

import Header from '@/components/organisms/Navigation/Header';
import Author from '@/components/molecules/Board/Author';
import ArticleSection from '@/components/organisms/Board/ArticleSection';
import InputBar from '@/components/organisms/Navigation/InputBar';
import CommentSection from '@/components/organisms/Board/CommentSection';

const DailyNoteDetail = () => {
  const {dailyNoteId} = useParams();
  const {data} = useDailyNoteDetail(getMemberId()!, dailyNoteId!);
  const {mutate} = usePostComment();
  const isFutureTime = dayjs(data?.sendTime).isAfter(dayjs());

  const handleCommentSubmit = (content: string) => {
    mutate({
      dailynoteId: dailyNoteId!,
      memberId: getMemberId()!,
      content,
      parentCommentId: 0,
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title="알림장" buttonType="back" />
      <div className={containerHeaderClass}>
        <Author
          profile={data?.picture || ''}
          writer={data?.name || ''}
          date={data?.sendTime || ''}
          isEdit={data?.canDelete}
        />
        <ArticleSection
          content={data?.content || ''}
          images={data?.images || []}
          thumbnails={data?.thumbnails || []}
        />
        <CommentSection
          commentCount={data?.commentCount || 0}
          comments={data?.comments || []}
        />
      </div>
      {!isFutureTime && <InputBar onSubmit={handleCommentSubmit} />}
    </div>
  );
};

export default DailyNoteDetail;
