import LabelInput from '@/components/atoms/Input/LabelInput';
import {patchUserTelSelector} from '@/recoil/selectors/my-page/userInfoTel';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';

interface UserTelUpdateViewProps {
  onValidChange: (value: boolean) => void;
  isValid: boolean;
}

const UserTelUpdateView = ({
  onValidChange,
  isValid,
}: UserTelUpdateViewProps) => {
  const [userTel, setUserTel] = useRecoilState(patchUserTelSelector);
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTel(e.target.value);
  };

  useEffect(() => {
    const telReg = new RegExp(/^0\d{1,2}(-|\))\d{3,4}-\d{4}$/);
    onValidChange(telReg.test(userTel));
  }, [userTel, onValidChange]);

  return (
    <>
      <LabelInput
        label="전화번호"
        value={userTel}
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
