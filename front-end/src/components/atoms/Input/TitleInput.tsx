import {ChangeEvent} from 'react';

interface TitleInputProps {
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput: React.FC<TitleInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  ...props
}: TitleInputProps) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-10 px-4 text-xs font-normal text-gray-200 bg-white "
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TitleInput;
