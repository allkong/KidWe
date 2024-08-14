import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {toast} from 'react-toastify';

import {dailyNoteFormState} from '@/recoil/atoms/daily-note/dailyNoteFormState';
import {useGetTeacherMemoInfo} from '@/hooks/daily-note/useGetTeacherMemoInfo';
import {usePostAutoDailyNote} from '@/hooks/daily-note/usePostAutoDailyNote';
import {getMemberId} from '@/utils/userData';
import {checkSafeHTML} from '@/utils/checkSafeHTML';

import Button from '@/components/atoms/Button/Button';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';

const DailyNoteAutoCreateModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [previewContent, setPreviewContent] = useState<string>('');
  const [formState, setFormState] = useRecoilState(dailyNoteFormState);

  const handleSuccess = (response: string) => {
    console.log('Response from mutate:', response);
    setPreviewContent(checkSafeHTML(response));
  };

  const {mutate} = usePostAutoDailyNote(handleSuccess);
  const {data} = useGetTeacherMemoInfo(getMemberId()!, formState.kidId!);

  const handleDailyNotePreview = () => {
    if (formState.kidId === 0) {
      toast.error('원생을 선택해 주세요');
      return;
    }

    mutate({teacherId: getMemberId()!, memoInfo: data!});
    setIsOpen(true);
  };

  const onSubmit = () => {
    setFormState(prev => ({
      ...prev,
      content: `<p>${previewContent}</p>`,
    }));
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Button label="자동생성" onClick={handleDailyNotePreview} />
      </div>
      <ModalPortal>
        <Modal isOpen={isOpen}>
          <Modal.Header title="미리보기" />
          <Modal.Body>
            <div dangerouslySetInnerHTML={{__html: previewContent}} />
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={() => setIsOpen(false)}
            size="large"
            round="full"
            variant="negative"
          />
          <Modal.BottomButton
            label="저장"
            onClick={onSubmit}
            size="large"
            round="full"
            variant="positive"
          />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default DailyNoteAutoCreateModal;
