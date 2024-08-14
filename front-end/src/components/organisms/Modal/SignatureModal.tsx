import {useState, useRef} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import {toast} from 'react-toastify';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import DashedButton from '@/components/atoms/Button/DashedButton';
import signatureIcon from '@/assets/icons/signature-fill.svg?react';
import RefreshIcon from '@/assets/icons/refresh-line.svg?react';

interface SignatureModalProps {
  onClick: (imageData: string) => void;
}

const SignatureModal = ({onClick}: SignatureModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const canvas = useRef<SignatureCanvas>(null);

  const handleModalClose = () => {
    setIsOpen(false);
    canvas.current?.clear();
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleCanvasClear = () => {
    canvas.current?.clear();
  };

  const handleSignatureComplete = () => {
    if (canvas.current) {
      if (canvas.current.isEmpty()) {
        toast.error('서명이 비어 있습니다.');
      } else {
        const dataURL = canvas.current.toDataURL('image/png');
        onClick(dataURL);
        handleModalClose();
      }
    }
  };

  return (
    <>
      <DashedButton
        label="서명하기"
        Icon={signatureIcon}
        variant="primary"
        onClick={handleModalOpen}
      />
      <ModalPortal>
        <Modal isOpen={isOpen}>
          <Modal.Header title="서명하기" />
          <Modal.Body>
            <p className="mt-2 text-sm text-gray-200">
              학부모님의 서명을 해주세요.
            </p>
            <div className="flex flex-col items-end mb-8">
              <SignatureCanvas
                ref={canvas}
                penColor="black"
                canvasProps={{
                  height: 300,
                  className: 'bg-gray-100 rounded-md mt-2 w-full',
                }}
                clearOnResize={false}
              />
              <button
                onClick={handleCanvasClear}
                className="flex flex-row items-center px-4 py-2 mt-4 space-x-1 text-sm bg-gray-100 rounded-md"
              >
                <RefreshIcon />
                <p>초기화</p>
              </button>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleModalClose}
            size="large"
            round="full"
            variant="negative"
          />
          <Modal.BottomButton
            label="저장"
            onClick={handleSignatureComplete}
            size="large"
            round="full"
            variant="positive"
          />
          <Modal.Background onClick={handleModalClose} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default SignatureModal;
