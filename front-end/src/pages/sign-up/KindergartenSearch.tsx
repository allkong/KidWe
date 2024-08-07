import React, {useState} from 'react';
import InputForm from '@/components/molecules/InputForm/InputForm';
import NoResult from '@/components/atoms/NoResult';
import KindergartenItem from '@/components/molecules/Item/KindergartenItem';
import {useNavigate} from 'react-router-dom';
import {Signup} from '@/recoil/atoms/signup/Signup';
import Select from '@/components/molecules/DropdownButton/Select';
import {CityOptions} from '@/constants/city';
import {DistrictOptions} from '@/constants/district';
import type {District} from '@/constants/district';
import {useRecoilState} from 'recoil';

const KindergartenSearch: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('시');
  const [selectedDistricts, setSelectedDistricts] = useState<District[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('군구');
  const [inputValue, setInputValue] = useState('원 검색');
  const [searchResult, setSearchResult] = useState('');
  const [signupkindergarten, setSignupKindergarten] = useRecoilState(Signup);
  const navigate = useNavigate();

  const handleKindergartenSearchButtonClick = () => {
    navigate('/signup/kindergarten/ban');
  };
  const handleCityChange = (value: string) => {
    const city = CityOptions.find(city => city.value === value);
    console.log(city);
    if (city) {
      setSelectedCity(city.label);
      console.log(city.value, 'handle쪽');
      setSelectedDistrict(''); // 도시 변경 시, 선택된 구 초기화
      setSelectedDistricts(DistrictOptions[city.value] || []);
    }
  };
  const handleDistrictChange = (value: string) => {
    const district = selectedDistricts.find(
      district => district.value === value
    );
    if (district) {
      setSelectedDistrict(district.label);
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
            <Select.Option key={city.id} text={city.label} id={city.value} />
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
              text={district.label}
              id={district.value}
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
