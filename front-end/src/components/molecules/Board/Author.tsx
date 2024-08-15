import {useParams, useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
import {toast} from 'react-toastify';

import {useDeleteDailyNote} from '@/hooks/daily-note/useDeleteDailyNote';
import {getMemberId} from '@/utils/userData';
import {getFullImageSource} from '@/utils/getFullImageSource';

import ProfileImage from '@/components/atoms/Image/ProfileImage';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';

interface AuthorProps {
  profile: string;
  writer: string;
  date: string;
  isEdit?: boolean;
}

const Author = ({profile, writer, date, isEdit = false}: AuthorProps) => {
  const navigate = useNavigate();
  const deleteMutation = useDeleteDailyNote();
  const {dailyNoteId} = useParams();

  const handleDailyNoteDelete = () => {
    deleteMutation.mutate(
      {memberId: getMemberId()!, dailyNoteId: dailyNoteId!},
      {
        onSuccess: () => {
          navigate('/daily-notes');
        },
      }
    );
  };

  const handleEditClick = () => {
    const currentTime = dayjs();
    const sendTimeWithBuffer = dayjs(date).add(5, 'minute');

    if (sendTimeWithBuffer.isBefore(currentTime)) {
      toast.error('전송 시간 5분 전까지 수정할 수 있어요.');
      return;
    }

    navigate(`/daily-notes/${dailyNoteId}/edit`);
  };
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center justify-between space-x-5 ">
        <ProfileImage src={getFullImageSource(profile) || ''} size="2rem" />
        <div className="flex flex-row items-end space-x-3">
          <p className="text-tiny">{writer}</p>
          <p className="text-gray-200 text-2xs">{date}</p>
        </div>
      </div>
      {isEdit && (
        <MoreButton align="vertical">
          <MoreButton.Option text="수정하기" onClick={handleEditClick} />
          <MoreButton.Option text="삭제하기" onClick={handleDailyNoteDelete} />
        </MoreButton>
      )}
    </div>
  );
};

export default Author;
