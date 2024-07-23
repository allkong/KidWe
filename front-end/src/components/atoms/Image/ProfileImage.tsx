import React from 'react';

interface ProfileImageProps {
  src: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
}: ProfileImageProps) => {
  return (
    <img className="object-cover w-10 h-10 rounded-full" src={src} alt="" />
  );
};

export default ProfileImage;
