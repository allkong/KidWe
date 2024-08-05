import Button from '@/components/atoms/Button/Button';

interface ButtonBarProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonBar = ({label, onClick}: ButtonBarProps) => {
  return (
    <nav className="box-border fixed bottom-0 w-full py-4 text-base bg-white border-t px-7">
      <Button
        label={label}
        round="small"
        size="large"
        variant="positive"
        onClick={onClick}
      />
    </nav>
  );
};

export default ButtonBar;
