interface RadioCheckBoxButtonProps {
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const RadioCheckBoxButton = ({
  options,
  selectedOption,
  onChange,
}: RadioCheckBoxButtonProps) => {
  return (
    <div className="flex space-x-4">
      {options.map(option => (
        <div
          key={option}
          className={`cursor-pointer py-2 px-10 rounded-full text-center ${
            selectedOption === option ? 'bg-secondary' : 'bg-gray-100'
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default RadioCheckBoxButton;
