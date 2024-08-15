import LabelInput from '@/components/atoms/Input/LabelInput';
import {patchUserTelSelector} from '@/recoil/selectors/my-page/userInfoTel';
import {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';

interface UserTelUpdateViewProps {
  onValidChange: (value: boolean) => void;
  isValid: boolean;
}

const UserTelUpdateView = ({
  onValidChange,
  isValid,
}: UserTelUpdateViewProps) => {
  const [input, setInput] = useState('');
  const setUserTel = useSetRecoilState(patchUserTelSelector);
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setUserTel(value);
  };

  useEffect(() => {
    const telReg = new RegExp(/^0\d{1,2}(-|\))\d{3,4}-\d{4}$/);
    onValidChange(telReg.test(input));
  }, [input, onValidChange]);

  return (
    <>
      <LabelInput
        label="전화번호"
        value={input}
        placeholder="ex) 010-1234-5678"
        onChange={handleTelChange}
      />
      {!isValid && (
        <p className="text-sm text-red-400">올바른 전화번호 형식이 아닙니다.</p>
      )}
    </>
  );
};

export default UserTelUpdateView;
