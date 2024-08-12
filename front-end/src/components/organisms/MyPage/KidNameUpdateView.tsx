import LabelInput from '@/components/atoms/Input/LabelInput';
import {kidInfoName} from '@/recoil/selectors/my-page/kidInfoName';
import {ChangeEvent} from 'react';
import {useRecoilState} from 'recoil';

const KidNameUpdateView = () => {
  const [kidName, setKidName] = useRecoilState(kidInfoName);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKidName(e.target.value);
  };

  return (
    <LabelInput
      label="자녀 이름"
      onChange={handleNameChange}
      value={kidName}
      placeholder="자녀 이름"
    />
  );
};

export default KidNameUpdateView;
