import Header from '@/components/organisms/Navigation/Header';
import {containerHeaderClass} from '@/styles/styles';
import Button from '@/components/atoms/Button/Button';
import KidUpdateView from '@/components/organisms/MyPage/KidUpdateView';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {usePatchKidInfo} from '@/hooks/my-page/usePatchKidInfo';
import {patchKidPictureState} from '@/recoil/atoms/my-page/kidPicture';
import {useLoading} from '@/hooks/loading/useLoading';
import {loadingState} from '@/recoil/atoms/axios/loading';
import {useNavigate} from 'react-router-dom';

const KidUpdate = () => {
  const navigate = useNavigate();
  const kidInfo = useRecoilValue(patchKidInfoState);
  const kidProfile = useRecoilValue(patchKidPictureState);

  const kidMutate = usePatchKidInfo(kidInfo.dto.id);

  const handleClickChange = () => {
    kidMutate.mutate(
      {info: kidInfo, picture: kidProfile},
      {
        onSuccess: () => {
          navigate('/my-page');
        },
        onSettled: () => setLoadingState(false),
      }
    );
  };
  const setLoadingState = useSetRecoilState(loadingState);
  useLoading(kidMutate.isPending);

  return (
    <div
      className={`${containerHeaderClass} max-h-screen h-screen bg-white flex flex-col px-10`}
    >
      <Header title="정보 변경" buttonType="back" />
      <div className="flex-grow">
        <KidUpdateView />
      </div>
      <div className="box-border w-full px-3 py-5 h-fit">
        <Button
          label="변경"
          size="large"
          variant="positive"
          onClick={handleClickChange}
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default KidUpdate;
