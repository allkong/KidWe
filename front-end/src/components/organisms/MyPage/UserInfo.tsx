import NoProfile from '@/assets/no-profile.png';
import ProfileImage from '@/components/atoms/Image/ProfileImage';

interface UserInfoProps {
  name: string;
  role: string;
  banName: string;
}

const UserInfo = ({name, role, banName}: UserInfoProps) => {
  return (
    <div className="flex flex-row justify-between w-full px-10 py-10 text-gray-300 bg-white">
      <div>
        <p className="text-3xl font-semibold">{name}</p>
        <p>{role}</p>
        <p>{banName}</p>
      </div>
      <ProfileImage src={NoProfile} size="6rem" />
    </div>
  );
};

export default UserInfo;
