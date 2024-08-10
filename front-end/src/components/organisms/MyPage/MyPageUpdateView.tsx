import LabelInput from '@/components/atoms/Input/LabelInput';
import {patchUserTelSelector} from '@/recoil/selectors/my-page/userInfoTel';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

const MyPageUpdateView = () => {
  const [userTel, setUserTel] = useRecoilState(patchUserTelSelector);
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTel(e.target.value);
  };

  const [newPassword, setNewPassword] = useState('');
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
          placeholder="전화번호"
          onChange={handleTelChange}
        />
      </div>
    </div>
  );
};

export default MyPageUpdateView;
