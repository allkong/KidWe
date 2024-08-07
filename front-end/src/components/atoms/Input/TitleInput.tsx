import {ChangeEvent} from 'react';

interface TitleInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
      className="w-full h-10 px-4 text-xs font-normal text-gray-200 bg-white "
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TitleInput;
