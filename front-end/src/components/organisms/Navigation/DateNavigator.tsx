import BracketButton from '@/components/atoms/Button/BracketButton';

interface DateNavigatorProps {
  title: string;
}

const DateNavigator = ({title}: DateNavigatorProps) => {
  return (
    <div className="fixed w-full left-0 right-0 top-[3.25rem] bg-white z-10">
      <div className="flex items-center p-3.5 bg-white justify-evenly">
        <BracketButton direction="left" onClick={() => {}} />
        <h1 className="font-semibold">{title}</h1>
        <BracketButton direction="right" onClick={() => {}} />
      </div>
    </div>
  );
};

export default DateNavigator;
