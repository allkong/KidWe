import Icon from '@/assets/icons/more-line.svg';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import DropdownOption from '@/components/atoms/Dropdown/DropdownOption';
import {useEffect, useRef, useState} from 'react';

interface MoreButtonProps {
  options?: string[];
}

const MoreButton = ({options}: MoreButtonProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    console.log(value);
  };

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
    <div ref={selectRef} className="relative">
      <button onClick={handleButtonClick}>
        <img src={Icon} alt="icon" />
      </button>
      <div className="absolute right-0 w-full top-10 min-w-fit">
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

export default MoreButton;
