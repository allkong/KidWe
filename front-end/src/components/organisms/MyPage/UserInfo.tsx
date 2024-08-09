interface UserInfoProps {
  name: string;
  role: string;
  banName: string;
}

const UserInfo = ({name, role, banName}: UserInfoProps) => {
  return (
    <div className="flex flex-col w-full px-10 py-10 text-gray-300 bg-white">
      <p className="text-3xl font-semibold">{name}</p>
      <p>{role}</p>
      <p>{banName}</p>
    </div>
  );
};

export default UserInfo;
