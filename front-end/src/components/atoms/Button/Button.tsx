interface ButtonProps {
  label: string;
  variant?: 'positive' | 'negative';
}

const Button = ({label, variant = 'positive'}: ButtonProps) => {
  const baseClass =
    'w-full py-2 font-semibold text-white rounded-full text-large';
  const variantClass = variant === 'positive' ? 'bg-primary' : 'bg-gray-200';

  return <button className={`${baseClass} ${variantClass}`}>{label}</button>;
};

export default Button;
