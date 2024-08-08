import React, {useState, useEffect} from 'react';
import InputForm from '@/components/molecules/InputForm/InputForm';
import NoResult from '@/components/atoms/NoResult';
import KindergartenItem from '@/components/molecules/Item/KindergartenItem';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import {Signup} from '@/recoil/atoms/signup/Signup';
// import SelectMain from '@/components/molecules/DropdownButton/SelectMain';
import Select from '@/components/molecules/DropdownButton/Select';
import {CityOptions} from '@/constants/city';
import {DistrictOptions} from '@/constants/district';
import type {District} from '@/constants/district';
import {getKindergartenSearch} from '@/apis/signup/getKindergartenSearch';
import Spinner from '@/components/atoms/Loader/Spinner';
import type {GetKindergarten} from '@/types/kindergarten/GetKindergarten';
const KindergartenSearch: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistricts, setSelectedDistricts] = useState<District[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [data, setData] = useState<GetKindergarten[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null | unknown>(null);
  const [isNoResult, setIsNoResult] = useState(true);
  const navigate = useNavigate();

  const handleKindergartenSearchButtonClick = () => {
    // 버튼 누를 때의 유치원 정보를 recoil에 담아주기!
    navigate('/signup/kindergarten/ban');
  };
  const handleCityChange = (value: string) => {
    const city = CityOptions.find(city => city.value === value);
    if (city) {
      setSelectedCity(city.label);
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

  const handleSearch = async () => {
    setIsNoResult(false);
    setSearchResult(inputValue);
    setIsLoading(true);
    setError(null);
    try {
      const response = await getKindergartenSearch({
        sido: selectedCity,
        sigungu: selectedDistrict,
        search: inputValue,
      });
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFocus = () => {
    if (inputValue === '') {
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
        <Select size="medium" label="시" onChange={handleCityChange}>
          {CityOptions.map(city => (
            <Select.Option key={city.id} text={city.label} id={city.value} />
          ))}
        </Select>
        {/* 두 번째 dropdown은 군구 */}
        <Select size="medium" label="군구" onChange={handleDistrictChange}>
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
        placeholder="원 검색"
        onClick={handleSearch}
        setValue={setInputValue}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      ></InputForm>
      <div className="flex w-full border rounded-lg min-h-96">
        {isNoResult ? (
          <div className="flex items-center justify-center w-full ">
            <NoResult text="유치원을 검색해주세요" />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full ">
            {isLoading && <Spinner />}
            {error && <p>에러 발생: {error}</p>}
            {data.length !== 0 ? (
              <div>
                {data.map(item => (
                  <KindergartenItem
                    key={item.id}
                    name={item.name}
                    address={item.address}
                    onClick={handleKindergartenSearchButtonClick}
                  />
                ))}
              </div>
            ) : (
              <NoResult text="유치원을 검색 결과가 없습니다." />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KindergartenSearch;
