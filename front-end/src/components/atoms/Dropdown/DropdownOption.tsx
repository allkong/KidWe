export interface DropdownOptionProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DropdownOption = ({text, onClick}: DropdownOptionProps) => {
  return (
    <div
      className="box-content px-2 py-2 text-left text-gray-200 transition-colors rounded-md cursor-pointer min-w-32 w-fit h-fit hover:bg-gray-100"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default DropdownOption;
