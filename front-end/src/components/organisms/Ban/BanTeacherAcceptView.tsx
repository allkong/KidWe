import UserCardItem from '@/components/molecules/Item/UserCardItem';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import {getTeacherAccept} from '@/apis/management/getTeacherAccept';
import {TeacherInfo} from '@/types/management/TeacherInfo';
import {getKindergartenId} from '@/utils/userData';
const BanTeacherAcceptView = () => {
  const [teacherAcceptList, setTeacherAcceptList] = useState<TeacherInfo[]>([]);
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId);
  const navigate = useNavigate();

  const options = [
    {
      text: '반 수정',
      onClick: () => {
        console.log('반 수정');
      },
    },
    {
      text: '퇴사 처리',
      onClick: () => {
        console.log('선생님 삭제?');
      },
    },
  ];

  useEffect(() => {
    const fetchTeacherAcceptList = async () => {
      try {
        if (kindergartenId) {
          const response = await getTeacherAccept(kindergartenId);
          setTeacherAcceptList(response);
        }
      } catch (error) {
        console.error('Failed to featch teacher accept list', error);
      }
    };
    fetchTeacherAcceptList();
  }, [kindergartenId]);

  return (
    <div>
      {teacherAcceptList.map(teacher => (
        <UserCardItem
          key={teacher.memberId}
          cardType="detail"
          profile=""
          userName={teacher.name}
          options={options}
        />
      ))}
      <p>morebutton의 옵션!</p>
    </div>
  );
};

export default BanTeacherAcceptView;
