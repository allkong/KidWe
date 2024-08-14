import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

// import {useGetUserInfo} from '@/hooks/my-page/useGetUserInfo';
// import {useGetKidInfo} from '@/hooks/my-page/useGetKidInfo';
// import {getMemberId, getKidId} from '@/utils/userData';
// import {RoleItem} from '@/enum/roleItem';
// import {ROLE_NAMES} from '@/constants/roleNames';

import NotificationButton from '@/components/atoms/Button/NotificationButton';
import KindergartenCard from '@/components/atoms/KindergartenCard';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import HomeMenu from '@/components/organisms/Content/HomeMenu';
import MemoShortcut from '@/components/organisms/Content/MemoShortcut';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const Home = () => {
  const navigate = useNavigate();
  // const {data: userData} = useGetUserInfo(getMemberId()!);
  // const kidId = getKidId();
  // const {data: kidData} = useGetKidInfo(kidId!);
  const [userProfile, setUserProfile] = useState({
    picture: '',
    name: '',
    role: '',
    kindergartenName: '유치원',
  });

  const handleUserCardItemClick = () => {
    navigate('/my-page');
  };

  // useEffect(() => {
  //   if (userData) {
  //     const newUserProfile = {...userProfile};
  //     newUserProfile.picture = userData.picture || '';
  //     newUserProfile.role = ROLE_NAMES[userData.role as RoleItem];

  //     if (
  //       userData.role === RoleItem.Teacher ||
  //       userData.role === RoleItem.Director
  //     ) {
  //       newUserProfile.name = userData.name;
  //     } else if (userData.role === RoleItem.Guardian && kidData) {
  //       newUserProfile.name = kidData.name || '';
  //     }

  //     setUserProfile(newUserProfile);
  //   }
  // }, [userData, kidData, userProfile]);

  return (
    <>
      <div className="min-h-screen px-5 space-y-3 border-t pb-[8rem] bg-secondary">
        <div className="flex justify-between pt-7">
          {/* 서비스명 & 로고 */}
          <div></div>
          <NotificationButton />
        </div>
        <div className="">
          <KindergartenCard kindergartenName={userProfile.kindergartenName} />
        </div>
        <div onClick={handleUserCardItemClick}>
          <UserCardItem
            profile={userProfile.picture}
            userName={`${userProfile.name} ${userProfile.role}`}
            cardType="arrow"
          />
        </div>
        <HomeMenu />
        <MemoShortcut />
      </div>
      <NavigationBar />
    </>
  );
};

export default Home;
