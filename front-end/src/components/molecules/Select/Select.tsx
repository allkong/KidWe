import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import SelectButton from '@/components/atoms/Button/SelectButton';
import DropdownOption from '@/components/atoms/Dropdown/DropdownOption';
import {useEffect, useRef, useState} from 'react';

interface SelectProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  options?: string[];
  onChange?: (value: string) => void;
}

function getSize(size: string) {
  switch (size) {
    case 'small':
      return 'w-20';
    case 'medium':
      return 'w-40';
    default:
      return 'w-full';
  }
}

const Select = ({
  label = '',
  size = 'large',
  options,
  onChange,
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    onChange?.(value);
    setIsOpen(false);
  };

  const sizeClass = getSize(size);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutside);
    return () => window.removeEventListener('mousedown', handleOutside);
  }, [selectRef]);

  return (
    <div ref={selectRef} className={`${sizeClass} box-border relative`}>
      <SelectButton
        onClick={handleButtonClick}
        label={selectedOption === undefined ? label : selectedOption}
      />
      <div className="absolute w-full top-10 min-w-fit">
        <Dropdown isOpen={isOpen}>
          {options &&
            options.map((option, idx) => (
              <DropdownOption
                key={idx}
                text={option}
                onClick={() => {
                  handleOptionClick(option);
                }}
              />
            ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default Select;
