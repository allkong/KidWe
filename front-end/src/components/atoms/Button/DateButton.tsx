interface DateButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
  disabled?: boolean;
}

const DateButton = ({
  onClick,
  isSelected = false,
  disabled = false,
}: DateButtonProps) => {
  const colorClass = isSelected ? 'bg-primary' : 'bg-gray-200';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex p-2 font-semibold box-border items-center justify-center text-gray-300 ${colorClass} rounded-full w-14 h-7 gap-1`}
    >
      <p className="text-sm">월</p>
      <p className="text-xxs">7.22</p>
    </button>
  );
};

export default DateButton;
