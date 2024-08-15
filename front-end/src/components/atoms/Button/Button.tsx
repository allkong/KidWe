export interface ButtonProps {
  label?: string;
  size?: 'small' | 'large';
  variant?: 'positive' | 'negative';
  round?: 'small' | 'full';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  label,
  size = 'small',
  variant = 'positive',
  round = 'small',
  Icon,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClass = 'py-2 font-semibold text-white text-large';
  const sizeClass = size === 'small' ? 'px-6' : 'w-full';
  const variantClass = variant === 'positive' ? 'bg-primary' : 'bg-gray-200';
  const roundClass = round === 'full' ? 'rounded-full' : 'rounded-sm';

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${sizeClass} ${variantClass} ${roundClass} transition-colors`}
      disabled={disabled}
    >
      {label}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
