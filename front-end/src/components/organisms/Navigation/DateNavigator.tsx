import BracketButton from '@/components/atoms/Button/BracketButton';

interface DateNavigatorProps {
  title: string;
  onClickLeft?: React.MouseEventHandler<HTMLButtonElement>;
  onClickRight?: React.MouseEventHandler<HTMLButtonElement>;
}

const DateNavigator = ({
  title,
  onClickLeft = () => {},
  onClickRight = () => {},
}: DateNavigatorProps) => {
  return (
    <nav className="fixed w-full left-0 right-0 top-[3.25rem] bg-white z-10">
      <div className="flex items-center p-3.5 bg-white justify-evenly">
        <BracketButton direction="left" onClick={onClickLeft} />
        <h1 className="font-semibold">{title}</h1>
        <BracketButton direction="right" onClick={onClickRight} />
      </div>
    </nav>
  );
};

export default DateNavigator;
