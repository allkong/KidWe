import {useState, ChangeEvent} from 'react';
import {useRecoilState} from 'recoil';
import {medicationFormState} from '@/recoil/atoms/medication/medicationFormState';
import {formatDateToYMD} from '@/utils/dayjsPlugin';
import {TimeOption, timeOptionValues} from '@/enum/medication/timeOption';
import {
  DATE_OPTIONS,
  STORAGE_OPTIONS,
  LABELS,
  PLACEHOLDERS,
  MESSAGES,
} from '@/constants/medication';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import RadioCircleButton from '@/components/atoms/CheckBox/RadioCircleButton';
import LabelInput from '@/components/atoms/Input/LabelInput';
import ImageUpload from '@/components/atoms/Input/ImageUpload';
import Select from '@/components/molecules/DropdownButton/Select';
import RadioCheckBoxButton from '@/components/atoms/CheckBox/RadioCheckBoxButton';
import ConsentSection from '@/components/organisms/Signature/ConsentSection';
import AreaDivider from '@/components/atoms/Divider/AreaDivider';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';

const MedicationWrite = () => {
  const [formState, setFormState] = useRecoilState(medicationFormState);

  const [selectedTimeOption, setSelectedTimeOption] = useState('');
  const [medicineImage, setMedicineImage] = useState<File | null>(null);
  const [signImage, setSignImage] = useState<File | null>(null);

  // 입력 값 변경
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // 투약일
  const handleDateChange = (option: string) => {
    setFormState(prev => ({...prev, medicationExecuteDueDate: option}));
  };

  // 보관방법
  const handleStorageChange = (option: string) => {
    setFormState(prev => ({...prev, storageMethod: option}));
  };

  // 투약시간
  const handleTimeChange = (option: string) => {
    setSelectedTimeOption(option);
    if (option === TimeOption.Etc) {
      setFormState(prev => ({...prev, medicationExecuteTime: ''}));
    } else {
      setFormState(prev => ({...prev, medicationExecuteTime: option}));
    }
  };

  const handleFormSubmit = () => {
    const formData = new FormData();

    formData.append('medicineDto', JSON.stringify(formState));

    if (medicineImage !== null) {
      formData.append('medicineImage', medicineImage);
    }

    if (signImage !== null) {
      formData.append('signImage', signImage);
    }
  };

  return (
    <div className="h-screen">
      <Header title="투약의뢰서" buttonType="back" />
      <div className={`${containerHeaderClass}`}>
        <div className="py-8 space-y-5 px-9">
          <div className="space-y-2">
            <p>투약일</p>
            <RadioCircleButton
              options={DATE_OPTIONS}
              selectedOption={formState.medicationExecuteDueDate}
              onChange={handleDateChange}
            />
          </div>
          <LabelInput
            label={LABELS.symptom}
            name="symptom"
            value={formState.symptom}
            onChange={handleInputChange}
            placeholder={PLACEHOLDERS.symptom}
          />
          <ImageUpload onChange={setMedicineImage} />
        </div>
        <AreaDivider />
        <div className="py-8 space-y-5 px-9">
          <LabelInput
            label={LABELS.medicineName}
            name="medicineName"
            value={formState.medicineName}
            onChange={handleInputChange}
            placeholder={PLACEHOLDERS.medicineName}
          />
          <LabelInput
            label={LABELS.type}
            name="type"
            value={formState.type}
            onChange={handleInputChange}
            placeholder={PLACEHOLDERS.type}
          />
          <LabelInput
            label={LABELS.capacity}
            name="capacity"
            value={formState.capacity}
            onChange={handleInputChange}
            placeholder={PLACEHOLDERS.capacity}
          />
          <LabelInput
            label={LABELS.numberOfDoses}
            name="numberOfDoses"
            value={formState.numberOfDoses}
            onChange={handleInputChange}
            placeholder={PLACEHOLDERS.numberOfDoses}
          />
          <div className="space-y-2">
            <p>시간</p>
            <Select label="선택" onChange={handleTimeChange}>
              {timeOptionValues.map(option => (
                <Select.Option key={option} text={option} />
              ))}
            </Select>
            {selectedTimeOption === TimeOption.Etc && (
              <LabelInput
                name="medicationExecuteTime"
                value={formState.medicationExecuteTime}
                onChange={handleInputChange}
                placeholder={PLACEHOLDERS.etc}
              />
            )}
          </div>
          <div className="space-y-2">
            <p>보관</p>
            <RadioCheckBoxButton
              options={STORAGE_OPTIONS}
              selectedOption={formState.storageMethod}
              onChange={handleStorageChange}
            />
          </div>
          <LabelInput
            label={LABELS.others}
            name="others"
            value={formState.others}
            onChange={handleInputChange}
            placeholder={PLACEHOLDERS.others}
          />
        </div>
        <AreaDivider />
        <div className="py-8 px-9">
          <ConsentSection
            text={MESSAGES.parentConsent}
            date={formatDateToYMD(formState.medicationExecuteDueDate)}
            parentName="김부모"
            onClick={setSignImage}
          />
          {/* {formState.signUrl && (
            <div className="flex justify-end">
              <img
                src={formState.signUrl}
                className="mt-4 bg-gray-100 rounded-md w-60"
              />
            </div>
          )} */}
        </div>
      </div>
      <ButtonBar label={LABELS.submit} onClick={handleFormSubmit} />
    </div>
  );
};

export default MedicationWrite;
