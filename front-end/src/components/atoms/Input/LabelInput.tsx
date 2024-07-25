import React from 'react';

interface LabelInputProps {
  value: string;
  label: string;
}

const LabelInput: React.FC<LabelInputProps> = ({
  value,
  label,
  ...props
}: LabelInputProps) => {
  return (
    <div>
      <p className="text-gray-300">{label}</p>
      <input
        className="w-full h-10 px-4 border border-gray-200 bg-white rounded-xl text-gray-200 font-normal text-xs"
        {...props}
        placeholder={value}
      />
    </div>
  );
};

export default LabelInput;
