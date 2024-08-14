import XSmallButton from '@/components/atoms/Button/XSmallButton';
import ImageUploadButton from '@/components/molecules/Button/ImageUploadButton';
import {patchKidPictureState} from '@/recoil/atoms/my-page/kidPicture';
import {kidInfoPicture} from '@/recoil/selectors/my-page/kidInfoPicture';
import {useRecoilState, useSetRecoilState} from 'recoil';

const KidProfileUpdateView = () => {
  const [kidProfile, setKidProfile] = useRecoilState(kidInfoPicture);
  const setKidProfileFile = useSetRecoilState(patchKidPictureState);

  const handleChangePicture = (value: string) => {
    setKidProfile(value);
  };

  const handleChangeFile = (value: File) => {
    setKidProfileFile(value);
  };

  const handleDeletePicture = () => {
    setKidProfile('');
    setKidProfileFile(null);
  };

  return (
    <div className="flex flex-col w-full">
      <p>자녀 이미지</p>
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <ImageUploadButton
          userPicture={kidProfile}
          onChangePreview={handleChangePicture}
          onChangeFile={handleChangeFile}
        />
        {kidProfile && (
          <div className="w-fit">
            <XSmallButton label="삭제" onClick={handleDeletePicture} />
          </div>
        )}
      </div>
    </div>
  );
};

export default KidProfileUpdateView;
