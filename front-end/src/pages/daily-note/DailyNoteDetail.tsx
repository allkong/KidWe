import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {useDailyNoteDetail} from '@/hooks/daily-note/useDailyNoteDetail';
// import {useDeleteDailyNote} from '@/hooks/daily-note/useDeleteDailyNote';
import {containerHeaderClass} from '@/styles/styles';
import {getMemberId} from '@/utils/userData';

import Header from '@/components/organisms/Navigation/Header';
import Author from '@/components/molecules/Board/Author';
import ArticleSection from '@/components/organisms/Board/ArticleSection';
import InputBar from '@/components/organisms/Navigation/InputBar';
import CommentSection from '@/components/organisms/Board/CommentSection';

const DailyNoteDetail = () => {
  const navigate = useNavigate();
  const {dailyNoteId} = useParams();
  // const deleteMutation = useDeleteDailyNote();

  const {data} = useDailyNoteDetail(getMemberId()!, dailyNoteId!);

  // const handleDailyNoteDelete = () => {
  //   if (dailyNoteId) {
  //     deleteMutation.mutate(dailyNoteId, {
  //       onSuccess: () => {
  //         navigate('/daily-notes');
  //       },
  //     });
  //   }
  // };

  // const options = [
  //   {
  //     text: '삭제하기',
  //     onClick: handleDailyNoteDelete,
  //   },
  // ];

  useEffect(() => {
    if (!data) {
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    }
  }, [data, navigate]);

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
        <ArticleSection content="<p>헤헤</p>" images={data?.thumbnails || []} />
        <CommentSection />
      </div>
      <InputBar />
    </div>
  );
};

export default DailyNoteDetail;
