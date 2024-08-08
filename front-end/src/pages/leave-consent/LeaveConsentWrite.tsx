import {useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {usePostLeaveConsent} from '@/hooks/leave-consent/usePostLeaveConsent';
import {leaveConsentFormState} from '@/recoil/atoms/leave-consent/leaveConsentFormState';
import {formatDateToYMD} from '@/utils/dayjsPlugin';
import {
  LEAVECONSENT_LABELS,
  LEAVECONSENT_PLACEHOLDERS,
  LEAVECONSENT_MESSAGES,
} from '@/constants/leave-consent';
import {DATE_OPTIONS} from '@/constants/dateOptions';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import RadioCircleButton from '@/components/atoms/CheckBox/RadioCircleButton';
import LabelInput from '@/components/atoms/Input/LabelInput';
import ConsentSection from '@/components/organisms/Signature/ConsentSection';
import AreaDivider from '@/components/atoms/Divider/AreaDivider';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';

const LeaveConsentnWrite = () => {
  const navigate = useNavigate();
  const {mutate, isLoading, error} = usePostLeaveConsent();
  const [formState, setFormState] = useRecoilState(leaveConsentFormState);
  const [signImage, setSignImage] = useState<File | null>(null);

  // 입력 값 변경
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // 귀가일
  const handleDateChange = (option: string) => {
    setFormState(prev => ({...prev, leaveDate: option}));
  };

  const handleFormSubmit = () => {
    const formData = new FormData();

    formData.append(
      'dto',
      new Blob([JSON.stringify(formState)], {type: 'application/json'})
    );

    if (signImage !== null) {
      formData.append('sign', signImage);
    }

    mutate({leaveConsentId: 1, formData});
    navigate('/leave-consent');
  };

  return (
    <div className="h-screen">
      <Header title="귀가동의서" buttonType="back" />
      <div className={`${containerHeaderClass}`}>
        <div className="py-8 space-y-5 px-9">
          <div className="space-y-2">
            <p>{LEAVECONSENT_LABELS.leaveDate}</p>
            <RadioCircleButton
              options={DATE_OPTIONS}
              selectedOption={formState.leaveDate}
              onChange={handleDateChange}
            />
          </div>
          <LabelInput
            label={LEAVECONSENT_LABELS.leaveTime}
            name="leaveTime"
            value={formState.leaveTime}
            onChange={handleInputChange}
          />
          <LabelInput
            label={LEAVECONSENT_LABELS.leaveMethod}
            name="leaveMethod"
            value={formState.leaveMethod}
            onChange={handleInputChange}
            placeholder={LEAVECONSENT_PLACEHOLDERS.leaveMethod}
          />
        </div>
        <AreaDivider />
        <div className="py-8 space-y-5 px-9">
          <div>
            <LabelInput
              label={LEAVECONSENT_LABELS.guardian}
              name="guardianRelationship"
              value={formState.guardianRelationship}
              onChange={handleInputChange}
              placeholder={LEAVECONSENT_PLACEHOLDERS.relationship}
            />
            <LabelInput
              name="guardianContact"
              value={formState.guardianContact}
              onChange={handleInputChange}
              placeholder={LEAVECONSENT_PLACEHOLDERS.contact}
            />
          </div>
          <div>
            <LabelInput
              label={LEAVECONSENT_LABELS.emergency}
              name="emergencyRelationship"
              value={formState.emergencyRelationship}
              onChange={handleInputChange}
              placeholder={LEAVECONSENT_PLACEHOLDERS.relationship}
            />
            <LabelInput
              name="emergencyContact"
              value={formState.emergencyContact}
              onChange={handleInputChange}
              placeholder={LEAVECONSENT_PLACEHOLDERS.contact}
            />
          </div>
        </div>
        <AreaDivider />
        <div className="py-8 px-9">
          <ConsentSection
            text={LEAVECONSENT_MESSAGES.parentConsent}
            date={formatDateToYMD(formState.leaveDate)}
            parentName="김부모"
            onClick={setSignImage}
          />
        </div>
      </div>
      <ButtonBar
        label={LEAVECONSENT_LABELS.submit}
        onClick={handleFormSubmit}
      />
    </div>
  );
};

export default LeaveConsentnWrite;
