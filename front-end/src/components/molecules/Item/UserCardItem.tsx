import React from 'react';
import ProfileImage from '@/components/atoms/Image/ProfileImage';

interface UserCardItemProps {
  profile: string;
  userName: string;
  className: string;
  cardType: string; // type 수정하기
}

const UsercardItem: React.FC<UserCardItemProps> = ({
  profile,
  userName,
  className,
  cardType,
}: UserCardItemProps) => {
  return (
    <div>
      <div className="flex">
        <ProfileImage src={profile} />
        <span>{userName}</span>
        <span>{className}</span>
      </div>
    </div>
  );
};

export default UsercardItem;
