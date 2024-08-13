import UserCardItem from '@/components/molecules/Item/UserCardItem';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import {getChildAccept} from '@/apis/management/getChildAccept';
import {ChildInfo} from '@/types/management/ChildInfo';
import {getKindergartenId} from '@/utils/userData';
const BanChildAcceptView = () => {
  const [childAcceptList, setChildAcceptList] = useState<ChildInfo[]>([]);
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId());

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
        console.log(' 아이 삭제?');
      },
    },
  ];

  useEffect(() => {
    const fetchChildAcceptList = async () => {
      try {
        console.log('kindergartenId', kindergartenId);
        if (kindergartenId) {
          const response = await getChildAccept(kindergartenId);
          setChildAcceptList(response);
        }
      } catch (error) {
        console.error('Failed to fetch child accept list', error);
      }
    };
    fetchChildAcceptList();
  }, [kindergartenId]);

  return (
    <div>
      {childAcceptList.map(child => (
        <UserCardItem
          key={child.kidId}
          cardType="detail"
          profile=""
          userName={child.name}
          options={options}
        />
      ))}
    </div>
  );
};

export default BanChildAcceptView;
