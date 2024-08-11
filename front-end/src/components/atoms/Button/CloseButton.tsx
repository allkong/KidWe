import Icon from '@/assets/icons/close-line.svg?react';

interface closeButtonProps {
  color?: 'black' | 'white';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton = ({color = 'black', onClick}: closeButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon fill={color} width={24} height={24} />
    </button>
  );
};

export default CloseButton;
