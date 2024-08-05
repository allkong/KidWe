import {Dayjs} from 'dayjs';

interface DateButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
  disabled?: boolean;
  date?: Dayjs;
}

const DateButton = ({
  onClick,
  isSelected = false,
  disabled = false,
  date,
}: DateButtonProps) => {
  const colorClass = isSelected ? 'bg-primary' : 'bg-gray-100';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex p-2 font-semibold box-border items-center justify-center text-gray-300 ${colorClass} rounded-full w-14 h-7 gap-1`}
    >
      <p className="text-sm">{date?.format('ddd')}</p>
      <p className="text-xxs">{date?.format('M.DD')}</p>
    </button>
  );
};

export default DateButton;
