import React, {useRef} from 'react';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import {Dayjs} from 'dayjs';
import {useClickOutside} from '@/hooks/useClickOutside';

interface CalendarButtonProps {
  render: () => React.ReactNode;
  onClick?: (value: Dayjs) => void;
  position?: 'left' | 'middle' | 'right';
  defaultDate?: Dayjs;
  showNavigation?: boolean;
  showNeighboringMonth?: boolean;
}

const getPositionClass = (position: 'left' | 'middle' | 'right') => {
  switch (position) {
    case 'left':
      return '-right-3';
    case 'right':
      return '-left-3';
    default:
      return '-left-32';
  }
};

const CalendarButton = ({
  render,
  onClick,
  position = 'middle',
  defaultDate,
  ...props
}: CalendarButtonProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useClickOutside(selectRef);
  // const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: Dayjs) => {
    onClick?.(value);
    setIsOpen(false);
  };

  const positionClass = getPositionClass(position);

  return (
    <div ref={selectRef} className="relative w-fit">
      <div className="w-fit h-fit" onClick={handleOnClick}>
        {render()}
      </div>
      {isOpen && (
        <>
          <div className="absolute w-0 h-0 border-b-8 border-l-8 border-r-8 border-white shadow-lg top-10 border-r-transparent border-l-transparent"></div>
          <div
            className={`absolute z-10 px-2 py-2 bg-white rounded-lg ${positionClass} top-[36px] w-72 shadow-lg`}
          >
            <CustomCalendar
              defaultDate={defaultDate}
              onChange={handleChange}
              activeStartDate={false}
              {...props}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarButton;
