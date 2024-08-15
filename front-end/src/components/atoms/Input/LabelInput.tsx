import {ChangeEvent, KeyboardEvent} from 'react';
import DeleteIcon from '@/assets/icons/delete-line.svg?react'; // 삭제 아이콘 import

interface LabelInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
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
  onKeyDown,
  onDelete, // 삭제 콜백 함수 추가
  type,
  ...props
}: LabelInputProps) => {
  return (
    <div className="relative space-y-2">
      {label && <p>{label}</p>}
      <div className="relative flex items-center">
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-10 px-4 pr-10 text-xs font-normal text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-2" // padding-right 추가
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          type={type}
          onKeyDown={onKeyDown}
          {...props}
        />
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="absolute flex items-center justify-center right-3"
            style={{height: '100%'}}
          >
            <DeleteIcon width={16} height={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default LabelInput;
