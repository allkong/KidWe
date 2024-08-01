import React from 'react';

interface LabelInputProps {
  value: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput: React.FC<LabelInputProps> = ({
  value,
  label,
  disabled,
  readOnly,
  placeholder,
  type,
  onChange,
  ...props
}: LabelInputProps) => {
  return (
    <div className="space-y-2">
      <p className="text-gray-300">{label}</p>
      <input
        className="w-full h-10 px-4 border border-gray-200 rounded-lg bg-white  text-gray-200 font-normal text-xs"
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  );
};

export default LabelInput;
