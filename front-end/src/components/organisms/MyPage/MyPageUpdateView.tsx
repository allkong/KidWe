import LabelInput from '@/components/atoms/Input/LabelInput';
import {patchUserNameSelector} from '@/recoil/selectors/my-page/userInfoName';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import UserTelUpdateView from '@/components/organisms/MyPage/UserTelUpdateView';
import UserPasswordUpdateView from '@/components/organisms/MyPage/UserPasswordUpdateView';
import UserImageUpdateView from '@/components/organisms/MyPage/UserImageUpdateView';

interface MyPageUpdateViewProps {
  onChangeValid: (value: boolean) => void;
}

const MyPageUpdateView = ({onChangeValid}: MyPageUpdateViewProps) => {
  const name = useRecoilValue(patchUserNameSelector);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const handlePasswordChange = (value: boolean) => {
    setIsPasswordValid(value);
  };

  const [isTelValid, setIsTelValid] = useState(false);
  const handleTelChange = (value: boolean) => {
    setIsTelValid(value);
  };

  useEffect(() => {
    onChangeValid(isPasswordValid && isTelValid);
  }, [isPasswordValid, isTelValid, onChangeValid]);

  return (
    <div className="w-full py-10 space-y-5">
      <div className="flex justify-end w-full">
        <UserImageUpdateView />
      </div>
      <div className="space-y-2">
        <LabelInput label="이름" value={name} disabled />
      </div>
      <div className="space-y-2">
        <UserPasswordUpdateView
          isValid={isPasswordValid}
          onValidChange={handlePasswordChange}
        />
      </div>
      <div className="space-y-2">
        <UserTelUpdateView
          isValid={isTelValid}
          onValidChange={handleTelChange}
        />
      </div>
    </div>
  );
};

export default MyPageUpdateView;
