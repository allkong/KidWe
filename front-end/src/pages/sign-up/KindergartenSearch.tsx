import React, {useState} from 'react';
import InputForm from '@/components/molecules/InputForm/InputForm';
import NoResult from '@/components/atoms/NoResult';
import KindergartenItem from '@/components/molecules/Item/KindergartenItem';
import {useNavigate} from 'react-router-dom';
import {Signup} from '@/recoil/atoms/signup/Signup';
import Select from '@/components/molecules/DropdownButton/Select';
import {useRecoilState} from 'recoil';

type City = {
  id: string;
  value: string;
};

type District = {
  id: string;
  value: string;
};

const KindergartenSearch: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('시');
  const [selectedDistricts, setSelectedDistricts] = useState<District[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('군구');
  const [inputValue, setInputValue] = useState('원 검색');
  const [searchResult, setSearchResult] = useState('');
  const [signupkindergarten, setSignupKindergarten] = useRecoilState(Signup);
  const navigate = useNavigate();

  const CityOptions: City[] = [
    {id: '1', value: '서울특별시'},
    {id: '2', value: '부산광역시'},
    {id: '3', value: '인천광역시'},
  ];

  const DistrictOptions: {[key: string]: District[]} = {
    '1': [
      {id: '1-1', value: '강남구'},
      {id: '1-2', value: '종로구'},
      {id: '1-3', value: '동대문구'},
    ],
    '2': [
      {id: '2-1', value: '해운대구'},
      {id: '2-2', value: '수영구'},
      {id: '2-3', value: '금정구'},
    ],
    '3': [
      {id: '3-1', value: '남동구'},
      {id: '3-2', value: '부평구'},
      {id: '3-3', value: '연수구'},
    ],
  };

  const handleKindergartenSearchButtonClick = () => {
    navigate('/signup/kindergarten/ban');
  };
  const handleCityChange = (id: string) => {
    const city = CityOptions.find(city => city.id === id);
    if (city) {
      setSelectedCity(city.value);
      console.log(city.value, 'handle쪽');
      setSelectedDistrict(''); // 도시 변경 시, 선택된 구 초기화
      setSelectedDistricts(DistrictOptions[id] || []);
    }
  };
  const handleDistrictChange = (value: string) => {
    const district = selectedDistricts.find(district => district.id === value);
    if (district) {
      setSelectedDistrict(district.value);
    }
  };

  const handleSearch = () => {
    setSearchResult(inputValue);
  };
  const handleFocus = () => {
    if (inputValue === '원 검색') {
      setInputValue('');
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen px-5 py-6 pt-20 space-y-8">
      <p className="text-lg">원 위치를 검색해주세요</p>
      <div className="flex items-center space-x-8">
        {/* 첫 dropdown은 시 */}
        <Select size="medium" label={selectedCity} onChange={handleCityChange}>
          {CityOptions.map(city => (
            <Select.Option key={city.id} text={city.value} id={city.id} />
          ))}
        </Select>
        {/* 두 번째 dropdown은 군구 */}
        <Select
          size="medium"
          label={selectedDistrict}
          onChange={handleDistrictChange}
        >
          {selectedDistricts.map(district => (
            <Select.Option
              key={district.id}
              text={district.value}
              id={district.id}
            />
          ))}
        </Select>
      </div>
      <InputForm
        inputValue={inputValue}
        buttonLabel="검색"
        onClick={handleSearch}
        setValue={setInputValue}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      ></InputForm>
      <div className="flex w-full border rounded-lg min-h-96">
        {searchResult === '원 검색' || searchResult === '' ? (
          <div className="flex items-center justify-center w-full ">
            <NoResult text="유치원을 검색해주세요" />
          </div>
        ) : (
          <div className="w-full">
            <KindergartenItem
              name="싸피 유치원"
              address="서울특별시 테헤란로 212 멀티캠퍼스"
              onClick={handleKindergartenSearchButtonClick}
            />
            <KindergartenItem
              name="싸피 유치원2"
              address="서울특별시 테헤란로 2123 멀티캠퍼스"
              onClick={handleKindergartenSearchButtonClick}
            />
            <KindergartenItem
              name="싸피 유치원3"
              address="서울특별시 테헤란로 2124 멀티캠퍼스"
              onClick={handleKindergartenSearchButtonClick}
            />
            <KindergartenItem
              name="싸피 유치원4"
              address="서울특별시 테헤란로 2125 멀티캠퍼스"
              onClick={handleKindergartenSearchButtonClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KindergartenSearch;
