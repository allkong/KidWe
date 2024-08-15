import ImageUploadButton from '@/components/molecules/Button/ImageUploadButton';
import {patchUserPictureState} from '@/recoil/atoms/my-page/userPicture';
import {patchUserPictureSelector} from '@/recoil/selectors/my-page/userInfoPicture';
import {useRecoilState, useSetRecoilState} from 'recoil';
import XSmallButton from '@/components/atoms/Button/XSmallButton';

const UserImageUpdateView = () => {
  const [userPicture, setUserPicture] = useRecoilState(
    patchUserPictureSelector
  );
  const setUserFile = useSetRecoilState(patchUserPictureState);

  const handleChangeFile = (file: File) => {
    setUserFile(file);
  };

  const handleChangePreview = (value: string) => {
    setUserPicture(value);
  };

  const handleDeleteButton = () => {
    setUserFile(null);
    setUserPicture(undefined);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full gap-2">
      <p>유저 프로필</p>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <ImageUploadButton
          userPicture={userPicture}
          onChangePreview={handleChangePreview}
          onChangeFile={handleChangeFile}
        />
        {userPicture && (
          <div className="space-x-1">
            <XSmallButton label="삭제" onClick={handleDeleteButton} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserImageUpdateView;
