interface LabelInputProps {
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

const LabelInput: React.FC<LabelInputProps> = ({
  placeholder,
  label,
  disabled,
  readOnly,
  ...props
}: LabelInputProps) => {
  return (
    <div className="space-y-2">
      <p>{label}</p>
      <input
        className="w-full h-10 px-4 text-xs font-normal text-gray-200 bg-white border border-gray-200 rounded-lg"
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default LabelInput;
