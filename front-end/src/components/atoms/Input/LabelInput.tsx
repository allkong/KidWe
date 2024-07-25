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
      <p className="py-2">{label}</p>
      <input
        className="w-full h-8 px-2 border border-black bg-white rounded-lg text-gray-300 font-normal text-xs "
        {...props}
        placeholder={value}
      />
    </div>
  );
};

export default LabelInput;
