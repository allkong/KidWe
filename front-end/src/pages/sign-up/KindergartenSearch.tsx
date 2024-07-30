import React, {useState} from 'react';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import SelectButton from '@/components/atoms/Button/SelectButton';
import InputForm from '@/components/molecules/InputForm/InputForm';
import NoResult from '@/components/atoms/NoResult';
import KindergartenItem from '@/components/molecules/Item/KindergartenItem';
import {useNavigate} from 'react-router-dom';

const KindergartenSearch: React.FC = () => {
  const [isCityDropDown, setIsCityDropDown] = useState(false);
  const [isDistrictDropDown, setIsDistrictDropDown] = useState(false);
  const [selectedCity, setSelectedCity] = useState('시/도 선택');
  const [selectedDistrict, setSelectedDistrict] = useState('구 선택');
  const [inputValue, setInputValue] = useState('원 검색');
  const [searchResult, setSearchResult] = useState('');
  const navigate = useNavigate();

  const handleKindergartenSearchButtonClick = () => {
    navigate('/register/kindergarten/completed');
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityDropDown(false);
  };
  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
    setIsDistrictDropDown(false);
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
    <div className="min-h-screen space-y-8 py-6 pt-20 flex flex-col items-center  w-full h-full px-5">
      <p className="text-lg">원 위치를 검색해주세요</p>
      <div className="flex items-center space-x-8">
        {/* 첫 dropdown은 시 */}
        <div>
          <SelectButton
            label={selectedCity}
            onClick={() => setIsCityDropDown(!isCityDropDown)}
          />
          {isCityDropDown && (
            <div className="absolute mt-2 bg-white">
              <Dropdown isOpen={true}>
                <Dropdown.Option
                  text={'option1'}
                  onClick={() => handleCitySelect('option1')}
                ></Dropdown.Option>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Option
                  text={'option2'}
                  onClick={() => handleCitySelect('option2')}
                ></Dropdown.Option>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Option
                  text={'option3'}
                  onClick={() => handleCitySelect('option3')}
                ></Dropdown.Option>
              </Dropdown>
            </div>
          )}
        </div>
        {/* 두 번째 dropdown은 군구 */}
        <div>
          <SelectButton
            label={selectedDistrict}
            onClick={() => setIsDistrictDropDown(!isDistrictDropDown)}
          />
          {isDistrictDropDown && (
            <div className="absolute mt-2 bg-white">
              <Dropdown isOpen={true}>
                <Dropdown.Option
                  text={'option1'}
                  onClick={() => handleDistrictSelect('option1')}
                ></Dropdown.Option>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Option
                  text={'option2'}
                  onClick={() => handleDistrictSelect('option2')}
                ></Dropdown.Option>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Option
                  text={'option3'}
                  onClick={() => handleDistrictSelect('option3')}
                ></Dropdown.Option>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
      <InputForm
        inputValue={inputValue}
        buttonLabel="검색"
        onClick={handleSearch}
        setValue={setInputValue}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      ></InputForm>
      <div className=" w-full min-h-96 flex border rounded-lg ">
        {searchResult === '원 검색' || searchResult === '' ? (
          <div className="w-full flex items-center justify-center  ">
            <NoResult text="유치원을 검색해주세요" />
          </div>
        ) : (
          <div className="w-full">
            <KindergartenItem
              name="싸피 유치원"
              address="서울특별시 테헤란로 212 멀티캠퍼스"
            />
            <KindergartenItem
              name="싸피 유치원2"
              address="서울특별시 테헤란로 2123 멀티캠퍼스"
            />
            <KindergartenItem
              name="싸피 유치원3"
              address="서울특별시 테헤란로 2124 멀티캠퍼스"
            />
            <KindergartenItem
              name="싸피 유치원4"
              address="서울특별시 테헤란로 2125 멀티캠퍼스"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KindergartenSearch;
