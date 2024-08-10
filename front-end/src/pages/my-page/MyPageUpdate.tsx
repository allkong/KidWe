import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import Button from '@/components/atoms/Button/Button';
import MyPageUpdateView from '@/components/organisms/MyPage/MyPageUpdateView';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {usePatchUserInfo} from '@/hooks/user/usePatchUserInfo';
import type {PatchUserInfo} from '@/types/user/PatchUserInfo';
import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';
import {useRecoilValue} from 'recoil';

const MyPageUpdate = () => {
  const userMutation = usePatchUserInfo();

  // 페이지 불러올 때 추가로 data fetch한 후 set 필요
  const patchUserInfo = useRecoilValue<PatchUserInfo>(patchUserInfoState);

  const handleClickButton = () => {
    userMutation.mutate(patchUserInfo);
  };

  return (
    <div
      className={`${containerHeaderClass} h-screen bg-white flex flex-col px-10`}
    >
      <Header title="정보 변경" buttonType="back" />
      <div className="flex items-center justify-center w-full py-10"></div>
      <div className="flex-grow overflow-auto">
        <MyPageUpdateView />
      </div>
      <div className="box-border w-full px-3 py-5 h-fit">
        <Button
          label="변경"
          size="large"
          variant="positive"
          onClick={() => handleClickButton()}
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default MyPageUpdate;
