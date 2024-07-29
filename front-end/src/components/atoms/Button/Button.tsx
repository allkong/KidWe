interface ButtonProps {
  label: string;
  size?: 'small' | 'large';
  variant?: 'positive' | 'negative';
  round?: 'full';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = ({
  label,
  size = 'small',
  variant = 'positive',
  round,
  onClick,
}: ButtonProps) => {
  const baseClass = 'py-2 font-semibold text-white text-large';
  const sizeClass = size === 'small' ? 'px-6' : 'w-full';
  const variantClass = variant === 'positive' ? 'bg-primary' : 'bg-gray-200';
  const roundClass = round === 'full' ? 'rounded-full' : 'rounded-sm';
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${sizeClass} ${variantClass} ${roundClass}`}
    >
      {label}
    </button>
  );
};

export default Button;
