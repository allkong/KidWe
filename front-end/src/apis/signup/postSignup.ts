import axiosInstance from '@/apis/axiosInstance';
import type {SignupFormState} from '@/types/signup/SignupFormState';

export const postSignup = async (
  data: SignupFormState,
  pictureFile: File | null
): Promise<string> => {
  console.log('우선 data 형태를 볼게요:', data);
  const formData = new FormData();
  formData.append(
    'dto',
    new Blob([JSON.stringify(data.dto)], {type: 'application/json'})
  );
  if (pictureFile !== null) {
    formData.append('picture', pictureFile); // 파일 객체를 FormData에 추가
  }

  try {
    const response = await axiosInstance.post('/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('서버의 응답 :', response);

    if (response.status === 200) {
      return '성공';
    } else if (response.status === 409) {
      return '실패';
    } else {
      return `에러 발생: ${response.statusText}`;
    }
  } catch (error) {
    console.debug(`postSignup 전송 Error!!!: ${error}`);
    throw error;
  }
};
