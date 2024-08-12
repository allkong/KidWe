import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';
import {kidInfoGender} from '@/recoil/selectors/my-page/kidInfoGender';
import {useRecoilState} from 'recoil';

const KidGenderUpdateView = () => {
  const [kidGender, setKidGender] = useRecoilState(kidInfoGender);

  const handleMaleClick = () => {
    setKidGender('MALE');
  };

  const handleFemaleClick = () => {
    setKidGender('FEMALE');
  };

  return (
    <>
      <p className="mb-4">성별</p>
      <div className="flex flex-row items-start gap-2">
        <CheckBoxButton
          label="남"
          isChecked={kidGender === 'MALE'}
          onClick={handleMaleClick}
        />
        <CheckBoxButton
          label="여"
          isChecked={kidGender === 'FEMALE'}
          onClick={handleFemaleClick}
        />
      </div>
    </>
  );
};

export default KidGenderUpdateView;
