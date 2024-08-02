import React, {useState} from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';
import KindergartenCard from '@/components/atoms/KindergartenCard';
import LabelInput from '@/components/atoms/Input/LabelInput';
import AllergyView from '@/components/organisms/Food/AllergyView';
import {allergies, Allergy} from '@/constants/allergy';

const genderItems = [
  {value: 'MALE', label: '남아'},
  {value: 'FEMALE', label: '여아'},
];

const KindergartenChild: React.FC = () => {
  const kindergartenName = '상태관리-유치원';
  const [childname, setChildname] = useState('');
  const [childbirth, setChildbirth] = useState('');
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [datas, setDatas] = useState(allergies);
  const navigate = useNavigate();

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompletedButtonClick = () => {
    navigate('/signup/complete');
  };

  const handleAllergyChange = (updatedDatas: Allergy[]) => {
    setDatas(updatedDatas);
  };

  return (
    <div className="min-h-screen space-y-16 flex flex-col w-full h-full px-5">
      <div className="flex space-x-2">
        <KindergartenCard kindergartenName={kindergartenName} />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex flex-col items-center">
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4 hidden"
            id="fileInput"
          />
          <div
            className="w-32 h-32 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            {image ? (
              <img
                src={image as string}
                alt="프로필 미리보기"
                className="w-full h-full object-cover rounded-lg "
              />
            ) : (
              <span className="text-gray-500">이미지 선택</span>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <LabelInput
            value={childname}
            placeholder="이름을 적어주세요"
            onChange={e => setChildname(e.target.value)}
          />
          <LabelInput
            value={childbirth}
            placeholder="클릭하여 생일을 입력해주세요"
            onChange={e => setChildbirth(e.target.value)}
          />
          <div className="flex justify-center space-x-2">
            {genderItems.map((item, index) => (
              <Button
                key={index}
                variant={
                  selectedGender === item.value ? 'positive' : 'negative'
                }
                label={item.label}
                onClick={() => handleGenderChange(item.value)}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border rounded-lg">
        <h2 className="mt-2">알레르기</h2>
        <AllergyView datas={datas} onChangeData={handleAllergyChange} />
      </div>
      <div>
        <Button
          label="입력 완료"
          size="large"
          onClick={handleCompletedButtonClick}
        />
      </div>
    </div>
  );
};

export default KindergartenChild;
