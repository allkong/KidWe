import ProfileImage from '@/components/atoms/Image/ProfileImage';
import Button from '@/components/atoms/Button/Button';

interface UserCardItemProps {
  profile: string;
  userName: string;
  banName?: string;
  onClickNegative?: React.MouseEventHandler<HTMLButtonElement>;
  onClickPositive?: React.MouseEventHandler<HTMLButtonElement>;
  negativeLabel?: string;
  positiveLabel?: string;
}

const UserCardItem = ({
  profile,
  userName,
  banName,
  onClickNegative = () => {},
  onClickPositive = () => {},
  negativeLabel,
  positiveLabel,
}: UserCardItemProps) => {
  return (
    <div
      className={`flex justify-between w-full items-center py-5 px-8 bg-white border-b`}
    >
      <div className="flex items-center space-x-3">
        <ProfileImage src={profile} size="2.9rem" />
        <span className="text-lg font-medium">{userName}</span>
        {banName && <span className="text-sm font-medium">{banName}</span>}
      </div>
      <div className="flex items-center gap-3">
        {negativeLabel && (
          <Button
            size="small"
            variant="negative"
            round="full"
            label={negativeLabel}
            onClick={onClickNegative}
          />
        )}
        {positiveLabel && (
          <Button
            size="small"
            variant="positive"
            round="full"
            label={positiveLabel}
            onClick={onClickPositive}
          />
        )}
      </div>
    </div>
  );
};

export default UserCardItem;
