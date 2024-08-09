import Icon from '@/assets/icons/more-line.svg';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import {useClickOutside} from '@/hooks/useClickOutside';
import React, {useRef} from 'react';

export interface MoreButtonProps {
  children?: React.ReactNode;
  position?: 'left' | 'right';
  align?: 'vertical' | 'horizontal';
}

const MoreButton = ({
  children,
  position = 'left',
  align = 'horizontal',
}: MoreButtonProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useClickOutside(selectRef, false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const positionClass = position === 'left' ? 'right-0' : 'left-0';
  const alignClass = align === 'horizontal' ? '' : 'rotate-90';

  return (
    <div ref={selectRef} className="relative flex items-center w-fit h-fit">
      <button onClick={handleButtonClick}>
        <img className={`${alignClass}`} src={Icon} alt="icon" />
      </button>
      <div className={`${positionClass} absolute w-full top-10 min-w-fit`}>
        <Dropdown isOpen={isOpen}>{children}</Dropdown>
      </div>
    </div>
  );
};

export default MoreButton;
