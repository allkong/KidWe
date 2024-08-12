import NoProfile from '@/assets/no-profile.png';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import {useGetUserInfo} from '@/hooks/my-page/useGetUserInfo';

const userId = 1;

const UserInfo = () => {
  const {data} = useGetUserInfo(userId);

  return (
    <div className="flex flex-row justify-between w-full px-10 py-10 mb-2 text-gray-300 bg-white">
      <div>
        <p className="text-3xl font-semibold">{data?.name}</p>
        <p>{data?.role}</p>
      </div>
      <ProfileImage src={NoProfile} size="6rem" />
    </div>
  );
};

export default UserInfo;
