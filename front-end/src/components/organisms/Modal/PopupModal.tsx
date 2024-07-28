import React from 'react';
import Button from '@/components/atoms/Button/Button';

interface PopupModalProps {
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onCancelButtonClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  >;
  onSubmitButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
}

const PopupModal = ({
  children,
  title,
  isOpen,
  onCancelButtonClick,
  onSubmitButtonClick,
  cancelButtonLabel,
  submitButtonLabel,
}: PopupModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed flex items-center justify-center w-screen h-screen">
      <div className="box-border z-10 flex flex-col items-center justify-center max-h-screen px-10 py-10 bg-white rounded-lg shadow-md min-w-fit min-h-fit">
        <div className="text-lg font-bold text-gray-300">{title}</div>
        <div className="w-72 min-h-60 h-fit">{children}</div>
        <div className="flex justify-between w-full px-8 space-x-3">
          {onCancelButtonClick !== undefined && (
            <Button
              label={cancelButtonLabel ? cancelButtonLabel : '취소'}
              variant="negative"
            />
          )}
          {onSubmitButtonClick !== undefined && (
            <Button
              label={submitButtonLabel ? submitButtonLabel : '확인'}
              variant="positive"
            />
          )}
        </div>
      </div>
      <div
        onClick={onCancelButtonClick}
        className="fixed w-screen h-screen bg-gray-300 opacity-40"
      ></div>
    </div>
  );
};

export default PopupModal;
