interface CircleButtonProps {
  label: string;
  date: string;
  variant?: 'positive' | 'negative';
}

const CircleButton: React.FC<CircleButtonProps> = ({
  label,
  date,
  variant = 'negative',
}) => {
  const baseClass =
    'w-1/3 aspect-square flex flex-col justify-center items-center rounded-full';
  const variantClass =
    variant === 'positive' ? 'bg-primary text-white' : 'bg-gray-100 text-black';

  return (
    <div className={`${baseClass} ${variantClass}`}>
      <p className="text-2xl font-medium">{label}</p>
      <p className="text-sm">{date}</p>
    </div>
  );
};

export default CircleButton;
