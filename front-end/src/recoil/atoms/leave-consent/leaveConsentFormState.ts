import {atom} from 'recoil';

export const leaveConsentFormState = atom({
  key: 'leaveConsentForm',
  default: {
    leaveDate: '', // 귀가일
    leaveTime: '', // 귀가 시간
    leaveMethod: '', // 귀가 방법
    guardianRelationship: '', // 보호자 관계
    guardianContact: '', // 보호자 전화번호
    emergencyRelationship: '', // 비상연락처 관계
    emergencyCotact: '', // 비상연락처 전화번호
  },
});
