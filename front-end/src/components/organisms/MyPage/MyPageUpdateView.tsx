import LabelInput from '@/components/atoms/Input/LabelInput';
import {patchUserPasswordSelector} from '@/recoil/selectors/my-page/userInfoPassword';
import {patchUserTelSelector} from '@/recoil/selectors/my-page/userInfoTel';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

interface MyPageUpdateViewProps {
  onChangeValid: (value: boolean) => void;
}

const MyPageUpdateView = ({onChangeValid}: MyPageUpdateViewProps) => {
  const [newPassword, setNewPassword] = useRecoilState(
    patchUserPasswordSelector
  );
  const [newPasswordConfig, setNewPasswordConfig] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfigChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordConfig(e.target.value);
  };

  useEffect(() => {
    setIsPasswordValid(newPassword === newPasswordConfig);
  }, [newPassword, newPasswordConfig]);

  const [userTel, setUserTel] = useRecoilState(patchUserTelSelector);
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTel(e.target.value);
  };
  const [isTelValid, setIsTelValid] = useState(false);

  useEffect(() => {
    const telReg = new RegExp(/^0\d{1,2}(-|\))\d{3,4}-\d{4}$/);
    setIsTelValid(telReg.test(userTel));
  }, [userTel]);

  useEffect(() => {
    onChangeValid(isPasswordValid && isTelValid);
  }, [isPasswordValid, isTelValid, onChangeValid]);

  return (
    <div className="w-full py-10 space-y-5">
      <div className="space-y-2">
        <LabelInput label="이름" value="백승우" disabled />
        <LabelInput label="이메일" value="808@kidwe.com" disabled />
      </div>
      <div className="space-y-2">
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
        {!isPasswordValid && (
          <p className="text-sm text-red-400">비밀번호가 일치하지 않습니다.</p>
        )}
      </div>
      <div className="space-y-2">
        <LabelInput
          label="전화번호"
          value={userTel}
          placeholder="ex) 010-1234-5678"
          onChange={handleTelChange}
        />
        {!isTelValid && (
          <p className="text-sm text-red-400">
            올바른 전화번호 형식이 아닙니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyPageUpdateView;
