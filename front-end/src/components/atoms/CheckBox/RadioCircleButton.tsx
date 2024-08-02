interface RadioCircleButtonProps {
  options: {label: string; date: string}[];
  selectedOption: string;
  onChange: (option: string) => void;
}

const RadioCircleButton: React.FC<RadioCircleButtonProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="flex flex-row space-x-3">
      {options.map(option => (
        <div
          key={option.date}
          className={`w-1/3 aspect-square flex flex-col justify-center items-center rounded-full ${selectedOption === option.date ? 'bg-primary text-white' : 'bg-gray-100 text-black'}`}
          onClick={() => onChange(option.date)}
        >
          <p className="text-2xl font-medium">{option.label}</p>
          <p className="text-sm">{option.date}</p>
        </div>
      ))}
    </div>
  );
};

export default RadioCircleButton;
