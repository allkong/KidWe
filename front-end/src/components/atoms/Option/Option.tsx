export interface OptionProps {
  text: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Option = ({text, onClick}: OptionProps) => {
  return (
    <div
      className="box-content px-2 py-2 text-left text-gray-200 transition-colors bg-white rounded-md cursor-pointer min-w-32 w-fit h-fit hover:bg-gray-100"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Option;
