import {atom} from 'recoil';

export const medicationFormState = atom({
  key: 'medicationFormState',
  default: {
    kidId: 0,
    medicineName: '', // 약 이름
    symptom: '', // 증상
    type: '', // 종류
    medicineUrl: '', // 약 사진
    capacity: '', // 용량
    medicationExecuteTime: '', // 투약 시간
    numberOfDoses: '', // 횟수
    storageMethod: '', // 보관 방법
    others: '', // 비고
    medicationExecuteDueDate: '', // 투약일
    signUrl: '', // 서명
  },
});
