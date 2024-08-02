interface DashedButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  variant?: 'positive' | 'negative';
}

const DashedButton = ({label, onClick, Icon, variant}: DashedButtonProps) => {
  const colorClass =
    variant === 'positive'
      ? 'border-primary text-primary'
      : 'border-gray-200 text-gray-200';

  return (
    <button
      className={`box-border gap-2 w-full flex flex-row items-center justify-center px-6 font-semibold  border-2  border-dashed rounded-md h-9 text-lg ${colorClass}`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {label}
    </button>
  );
};

export default DashedButton;
