import {useEffect} from 'react';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {useNavigate} from 'react-router-dom';
import AnnounceItem from '@/components/molecules/Item/AnnounceItem';
// import sunflower from '@/assets/sunflower.png';
// import {AnnounceItemProps} from '@/types/announce/AnnounceItemProps';
import {useQuery} from '@tanstack/react-query';
import {getAnnouncementList} from '@/apis/announcement/getAnnouncementList';
import NoResult from '@/components/atoms/NoResult';
import {AnnouncementItem} from '@/types/announce/AnnouncementItem';
const AnnouncementList = () => {
  const navigate = useNavigate();
  const handleAnnounceDetailClick = (id: number) => {
    navigate(`/announcement/${id}`);
  };

  const {data} = useQuery<AnnouncementItem[]>({
    queryKey: ['title', 'memberName', 'memberBan', 'createdDate', 'commentCnt'],
    queryFn: () => getAnnouncementList(),
  });
  useEffect(() => {
    console.log('받은 데이터', data);
  }, [data]);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {data ? (
        data.map(announcement => (
          <AnnounceItem
            key={announcement.createdDate}
            date={announcement.createdDate}
            title={announcement.title}
            writer={announcement.memberName}
            banName={announcement.memberBan}
            onClick={() => handleAnnounceDetailClick(1)}
          />
        ))
      ) : (
        <div className="flex items-center justify-center">
          <NoResult text="게시글이 없습니다." />
        </div>
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
