import {RefObject, useEffect, useState} from 'react';

export const useClickOutside = (
  selectRef: RefObject<HTMLElement>
): [isOpen: boolean, setIsOpen: (value: boolean) => void] => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutside);

    return () => window.removeEventListener('click', handleOutside);
  }, [selectRef]);

  return [isOpen, setIsOpen];
};
