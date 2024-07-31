import {useCallback, useState} from 'react';

/**
 *
 * @param controlledIsChecked 직접 state를 이용해 관리하고 싶은 경우
 * @param onClick checkbox 클릭 시 실행될 Event Listener
 * @returns boolean 변수, 클릭 시 boolean 변수를 변경하는 함수, controlled 여부를 반환합니다
 */
export function useCheckBox(
  controlledIsChecked?: boolean,
  onClick?: () => void
): [isChecked: boolean, handleClick: () => void, isControlled: boolean] {
  const isControlled = controlledIsChecked !== undefined;

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = useCallback(() => {
    if (!isControlled) {
      setIsChecked(!isChecked);
    }
    onClick?.();
  }, [isControlled, isChecked, onClick]);

  if (isControlled) {
    return [controlledIsChecked, handleClick, isControlled];
  }
  return [isChecked, handleClick, isControlled];
}
