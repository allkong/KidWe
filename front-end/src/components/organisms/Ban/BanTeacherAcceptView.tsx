import UserCardItem from '@/components/molecules/Item/UserCardItem';
import {useState} from 'react';
const BanTeacherAcceptView = () => {
  const [teacherAcceptList, setTeacherAcceptList] = useState([]);
  return (
    <div>
      <UserCardItem
        cardType="detail"
        profile=""
        userName="김삿갓"
      ></UserCardItem>
    </div>
  );
};

export default BanTeacherAcceptView;
