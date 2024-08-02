import React, {useEffect, useRef, useState} from 'react';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import dayjs, {Dayjs} from 'dayjs';

interface CalendarButtonProps {
  render: () => React.ReactNode;
  onClick?: (value: Dayjs) => void;
}

const CalendarButton = ({render, onClick}: CalendarButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutside);

    return () => window.removeEventListener('click', handleOutside);
  }, [selectRef]);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: Date) => {
    onClick?.(dayjs(value));
  };

  return (
    <div ref={selectRef} className="relative w-fit" onClick={handleOnClick}>
      {render()}
      {isOpen && (
        <>
          <div className="absolute w-0 h-0 border-b-8 border-l-8 border-r-8 border-white shadow-lg top-10 border-r-transparent border-l-transparent"></div>
          <div className="absolute px-2 py-2 bg-white rounded-lg -right-3 top-[36px] w-72 shadow-lg">
            <CustomCalendar onChange={handleChange} />
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarButton;
