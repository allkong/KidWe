import {useCallback, useState} from 'react';

/**
 *
 * @param controlledIsChecked 직접 state를 이용해 관리하고 싶은 경우 값 입력
 * @param onClick checkbox 클릭 시 실행될 Event Listener, 직접 관리하고 싶은 경우 입력
 * @returns boolean 변수, 클릭 시 boolean 변수를 변경하는 함수를 반환합니다
 */
export function useCheckBox(
  controlledIsChecked?: boolean,
  onClick?: (value: boolean) => void
): [isChecked: boolean, setIsChecked: (value: boolean) => void] {
  const isControlled = controlledIsChecked !== undefined;

  const [innerIsChecked, setInnerIsChecked] = useState(false);

  const setIsChecked = useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setInnerIsChecked(value);
      }
      onClick?.(value);
    },
    [isControlled, setInnerIsChecked, onClick]
  );

  let isChecked = innerIsChecked;
  if (isControlled) {
    isChecked = controlledIsChecked;
  }
  return [isChecked, setIsChecked];
}
