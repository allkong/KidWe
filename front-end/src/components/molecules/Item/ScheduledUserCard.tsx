import homeImage from '@/assets/image/home.png';
import kindergartenImage from '@/assets/image/kindergarten.png';
import ScheduledIcon from '@/assets/icons/time-line.svg?react';
import {RoleItem} from '@/enum/roleItem';

interface ScheduledUserCardProps {
  userName: string;
  banName?: string;
  writer: RoleItem;
  sendTime?: string;
}

const ScheduledUserCard = ({
  userName,
  banName,
  writer,
  sendTime,
}: ScheduledUserCardProps) => {
  const scheduledClass = sendTime ? 'bg-[#F7F7F7]' : 'bg-white';
  return (
    <div
      className={`flex justify-between items-center py-5 px-8 bg-white ${scheduledClass}`}
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
      {sendTime && (
        <div className="flex flex-col items-end">
          <ScheduledIcon width={24} height={24} />
          <p className="text-xs">{sendTime}</p>
        </div>
      )}
    </div>
  );
};

export default ScheduledUserCard;
