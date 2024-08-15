interface ProfileImageProps {
  src: string;
  size?: string;
}

const ProfileImage = ({src, size = '2.5rem'}: ProfileImageProps) => {
  return (
    <img
      className="object-cover rounded-full"
      src={src}
      alt=""
      style={{width: size, height: size}}
    />
  );
};

export default ProfileImage;
