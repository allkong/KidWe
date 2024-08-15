import LabelInput from '@/components/atoms/Input/LabelInput';
import {patchUserPasswordSelector} from '@/recoil/selectors/my-page/userInfoPassword';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

interface UserPasswordUpdateViewProps {
  onValidChange: (value: boolean) => void;
  isValid: boolean;
}

const UserPasswordUpdateView = ({
  onValidChange,
  isValid,
}: UserPasswordUpdateViewProps) => {
  const [newPassword, setNewPassword] = useRecoilState(
    patchUserPasswordSelector
  );
  const [newPasswordConfig, setNewPasswordConfig] = useState('');

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfigChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordConfig(e.target.value);
  };

  useEffect(() => {
    onValidChange(newPassword === newPasswordConfig);
  }, [newPassword, newPasswordConfig, onValidChange]);

  return (
    <>
      <LabelInput
        label="비밀번호 변경"
        value={newPassword}
        onChange={handleNewPasswordChange}
        type="password"
        placeholder="비밀번호 변경"
      />
      <LabelInput
        label="비밀번호 확인"
        value={newPasswordConfig}
        onChange={handleNewPasswordConfigChange}
        type="password"
        placeholder="비밀번호 확인"
      />
      {!isValid && (
        <p className="text-sm text-red-400">비밀번호가 일치하지 않습니다.</p>
      )}
    </>
  );
};

export default UserPasswordUpdateView;
