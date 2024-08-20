import {RoleItem} from '@/enum/roleItem';
import {getFullImageSource} from '@/utils/getFullImageSource';

import kindergartenImage from '@/assets/image/kindergarten.png';
import ScheduledIcon from '@/assets/icons/time-line.svg?react';
import SendIcon from '@/assets/icons/send-plane-line.svg?react';
import ProfileImage from '@/components/atoms/Image/ProfileImage';

interface ScheduledUserCardProps {
  profile?: string;
  userName: string;
  banName?: string;
  writer: RoleItem;
  sendTime?: string;
  isSchedule?: boolean;
}

const ScheduledUserCard = ({
  profile,
  userName,
  banName,
  writer,
  sendTime,
  isSchedule = false,
}: ScheduledUserCardProps) => {
  const scheduledClass = isSchedule ? 'bg-[#F7F7F7]' : 'bg-white';
  return (
    <div
      className={`flex justify-between items-center py-5 px-8 border-b ${scheduledClass}`}
    >
      <div className="flex items-center space-x-4">
        {writer === RoleItem.Guardian ? (
          <ProfileImage src={getFullImageSource(profile)} size="2.75rem" />
        ) : (
          <img className="w-11" src={kindergartenImage} />
        )}
        <span className="text-lg font-medium">{userName}</span>
        {banName && <span className="text-sm font-medium">{banName}</span>}
      </div>
      <div className="flex flex-col items-end">
        {isSchedule ? (
          <ScheduledIcon fill="#8A8A8A" width={22} height={22} />
        ) : (
          <SendIcon fill="#8A8A8A" width={22} height={22} />
        )}
        <p className="text-xs">{sendTime}</p>
      </div>
    </div>
  );
};

export default ScheduledUserCard;
