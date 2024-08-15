import AllergyView from '@/components/organisms/Food/AllergyView';
import {ALLERGIES, Allergy} from '@/constants/allergy';
import {kidInfoAllergies} from '@/recoil/selectors/my-page/kidInfoAllergies';
import {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';

const KidAllergyUpdateView = () => {
  const [allergies, setAllergies] = useState(ALLERGIES);
  const setKidAllergy = useSetRecoilState(kidInfoAllergies);

  const handleAllergyChange = (value: Allergy[]) => {
    setAllergies(value);
  };

  useEffect(() => {
    setKidAllergy(allergies.map(allergy => allergy.value));
  }, [allergies, setKidAllergy]);

  return (
    <>
      <p>알레르기 정보</p>
      <AllergyView datas={allergies} onChangeData={handleAllergyChange} />
    </>
  );
};

export default KidAllergyUpdateView;
