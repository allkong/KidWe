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
    setUserPicture('');
  };

  return (
    <div className="flex items-end justify-end w-full gap-2">
      <div>
        <XSmallButton label="삭제" onClick={handleDeleteButton} />
      </div>
      <ImageUploadButton
        userPicture={userPicture}
        onChangePreview={handleChangePreview}
        onChangeFile={handleChangeFile}
      />
    </div>
  );
};

export default UserImageUpdateView;
