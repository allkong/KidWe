import {ChangeEvent} from 'react';

interface LabelInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const LabelInput: React.FC<LabelInputProps> = ({
  name,
  placeholder,
  label,
  value,
  disabled = false,
  readOnly = false,
  onChange,
  type,
  ...props
}: LabelInputProps) => {
  return (
    <div className="space-y-2">
      <p>{label}</p>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-10 px-4 text-xs font-normal text-gray-200 bg-white border border-gray-200 rounded-lg"
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  );
};

export default LabelInput;
