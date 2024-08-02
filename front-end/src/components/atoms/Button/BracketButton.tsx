import Icon from '@/assets/icons/left-line.svg';

interface BracketButtonProps {
  direction: 'left' | 'right';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const BracketButton = ({direction, onClick}: BracketButtonProps) => {
  const rotationClass = direction === 'right' ? 'rotate-180' : '';

  return (
    <button onClick={onClick} className={`${rotationClass}`}>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default BracketButton;
