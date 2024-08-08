interface XSmallButtonProps {
  variant?: 'negative' | 'positive';
  label?: string;
  onClick?: () => void;
}

const XSmallButton = ({
  variant = 'negative',
  label = '',
  onClick,
}: XSmallButtonProps) => {
  const colorClass = variant === 'negative' ? 'bg-gray-200' : 'bg-primary';

  return (
    <button
      onClick={onClick}
      className={`${colorClass} rounded-full text-white text-xs px-2 py-1 min-w-11`}
    >
      {label}
    </button>
  );
};

export default XSmallButton;
