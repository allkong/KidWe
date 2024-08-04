import WriteButton from '@/components/atoms/Button/WriteButton';
import {useNavigate} from 'react-router-dom';
import AnnounceItem from '@/components/molecules/Item/AnnounceItem';
import sunflower from '@/assets/sunflower.png';

const AnnouncementList = () => {
  const navigate = useNavigate();
  const handleAnnounceDetailClick = () => {
    navigate('/announcement/1');
  };
  const date = new Date();
  return (
    <div>
      <AnnounceItem
        date={date}
        title="안녕"
        writer="나"
        classname="전체"
        onClick={handleAnnounceDetailClick}
      />
      <AnnounceItem
        date={date}
        title="집보내줘"
        writer="원장"
        tagbgcolor="red"
        classname="치타반"
        onClick={handleAnnounceDetailClick}
      />
      <AnnounceItem
        date={date}
        title="아이가안와요"
        writer="옆반선생님"
        tagbgcolor="#d3d3d3"
        classname="안"
        src={sunflower}
        onClick={handleAnnounceDetailClick}
      />
      <WriteButton onClick={() => navigate('/announcement/write')} />
    </div>
  );
};

export default AnnouncementList;
