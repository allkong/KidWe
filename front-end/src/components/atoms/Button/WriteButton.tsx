import pencil from '@/assets/icons/pencil.svg';

interface WriteButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}

const WriteButton = ({onClick, disabled}: WriteButtonProps) => {
  const colorClass = disabled ? 'bg-gray-200' : 'bg-primary';

  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className={`${colorClass} z-10 absolute flex items-center justify-center rounded-full shadow-sm cursor-pointer w-14 h-14 right-8 bottom-24 transition-colors`}
    >
      <img src={pencil} alt={'NoWriteImage'} className="w-8 h-8 " />
    </div>
  );
};

export default WriteButton;
