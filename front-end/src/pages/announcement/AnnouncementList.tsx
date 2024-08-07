import {useState} from 'react';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {useNavigate} from 'react-router-dom';
import AnnounceItem from '@/components/molecules/Item/AnnounceItem';
import sunflower from '@/assets/sunflower.png';
import {AnnounceItemProps} from '@/types/announce/AnnounceItemProps';
import NoResult from '@/components/atoms/NoResult';
const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState<AnnounceItemProps[]>([]);
  const navigate = useNavigate();
  const handleAnnounceDetailClick = (id: number) => {
    navigate(`/announcement/${id}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {announcements.length === 0 ? (
        <div className="flex items-center justify-center">
          <NoResult text="게시글이 없습니다." />
        </div>
      ) : (
        announcements.map(announcement => (
          <AnnounceItem
            key={announcement.id}
            date={announcement.date}
            title={announcement.title}
            writer={announcement.writer}
            classname={announcement.classname}
            tagbgcolor={announcement.tagbgcolor}
            src={announcement.src || sunflower}
            onClick={() => handleAnnounceDetailClick(announcement.id)}
          />
        ))
      )}
      <WriteButton onClick={() => navigate('/announcement/write')} />
    </div>
  );
};

export default AnnouncementList;
{
  /* <AnnounceItem
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
      /> */
}
