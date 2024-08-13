import Button from '@/components/atoms/Button/Button';
import MoreButton from '@/components/molecules/DropdownButton/MoreButtonMain';

interface ButtonBarProps {
  label: string;
  variant?: 'positive' | 'negative';
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'basic' | 'more';
}

const ButtonBar = ({
  label,
  variant = 'positive',
  disabled,
  onClick,
  type = 'basic',
}: ButtonBarProps) => {
  return (
    <nav className="box-border fixed bottom-0 flex flex-row items-center w-full py-4 text-base bg-white border-t px-7">
      {type === 'more' && (
        <div className="flex items-center justify-center w-12 h-10 bg-gray-100 rounded-sm me-2">
          <MoreButton />
        </div>
      )}
      <Button
        label={label}
        round="small"
        size="large"
        variant={variant}
        disabled={disabled}
        onClick={onClick}
      />
    </nav>
  );
};

export default ButtonBar;
