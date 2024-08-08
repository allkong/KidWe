import ProfileImage from '@/components/atoms/Image/ProfileImage';
import {RoleItem} from '@/enum/roleItem';

interface ScheduledUserCardProps {
  profile: string;
  userName: string;
  banName?: string;
  writer: RoleItem;
}

const ScheduledUserCard = ({
  profile,
  userName,
  banName,
  writer,
}: ScheduledUserCardProps) => {
  return (
    <div className={`flex justify-between items-center py-5 px-8 bg-white`}>
      <div className="flex items-center space-x-3">
        {writer === }
        <ProfileImage src={profile} size="2.9rem" />
        <span className="text-lg font-medium">{userName}</span>
        {banName && <span className="text-sm font-medium">{banName}</span>}
      </div>
      <div>여기</div>
    </div>
  );
};

export default ScheduledUserCard;
