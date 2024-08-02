import WriteButton from '@/components/atoms/Button/WriteButton';
import {useNavigate} from 'react-router-dom';
import AnnounceItem from '@/components/molecules/Item/AnnounceItem';

const AnnouncementList = () => {
  const navigate = useNavigate();
  const date = new Date();
  return (
    <div>
      <AnnounceItem date={date} title="안녕" writer="나" />
      <AnnounceItem
        date={date}
        title="집보내줘"
        writer="원장"
        tagbgcolor="red"
      />
      <AnnounceItem
        date={date}
        title="아이가안와요"
        writer="옆반선생님"
        tagbgcolor="#d3d3d3"
      />
      <WriteButton onClick={() => navigate('/announcement/write')} />
    </div>
  );
};

export default AnnouncementList;
