interface DashedButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  variant?: 'primary' | 'gray' | 'lightgray';
}

const DashedButton = ({
  label,
  onClick,
  Icon,
  variant = 'lightgray',
}: DashedButtonProps) => {
  let colorClass = '';
  if (variant === 'primary') {
    colorClass = 'border-primary text-primary';
  } else if (variant === 'gray') {
    colorClass = 'border-gray-200 text-gray-200';
  } else if (variant === 'lightgray') {
    colorClass = 'border-gray-150 text-gray-150';
  }

  return (
    <button
      className={`box-border gap-2 w-full flex flex-row items-center justify-center px-6 font-medium border-2 border-dashed rounded-md h-9 ${colorClass}`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {label}
    </button>
  );
};

export default DashedButton;
