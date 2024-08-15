import {ChangeEvent} from 'react';

interface TitleInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput: React.FC<TitleInputProps> = ({
  placeholder,
  value,
  onChange,
  ...props
}: TitleInputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="w-full px-4 font-normal text-gray-200 bg-white h-14 "
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TitleInput;
