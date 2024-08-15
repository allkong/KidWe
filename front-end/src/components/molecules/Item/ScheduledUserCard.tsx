import homeImage from '@/assets/image/home.png';
import kindergartenImage from '@/assets/image/kindergarten.png';
import ScheduledIcon from '@/assets/icons/time-line.svg?react';
import SendIcon from '@/assets/icons/send-plane-line.svg?react';
import {RoleItem} from '@/enum/roleItem';

interface ScheduledUserCardProps {
  userName: string;
  banName?: string;
  writer: RoleItem;
  sendTime?: string;
  isSchedule?: boolean;
}

const ScheduledUserCard = ({
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
          <img className="w-12" src={homeImage} />
        ) : (
          <img className="w-12" src={kindergartenImage} />
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
