import NoProfile from '@/assets/no-profile.png';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import {useGetUserInfo} from '@/hooks/my-page/useGetUserInfo';
import {getMemberId} from '@/utils/userData';
import {ROLE_NAMES} from '@/constants/roleNames';
import {RoleItem} from '@/enum/roleItem';

const UserInfo = () => {
  const {data} = useGetUserInfo(getMemberId()!);

  return (
    <div className="flex flex-row items-center justify-between w-full px-10 py-10 mb-2 text-gray-300 bg-white">
      <div>
        <p className="text-3xl font-semibold">{data?.name}</p>
        <p>{ROLE_NAMES[data?.role as RoleItem]}</p>
      </div>
      <ProfileImage src={NoProfile} size="7rem" />
    </div>
  );
};

export default UserInfo;
