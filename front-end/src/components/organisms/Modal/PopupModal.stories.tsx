import type {Meta, StoryObj} from '@storybook/react';
import PopupModal from '@/components/organisms/Modal/PopupModal';
import {useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof PopupModal> = {
  component: PopupModal,
};

export default meta;

type Story = StoryObj<typeof PopupModal>;

export const None: Story = {
  args: {
    isOpen: true,
  },
};

export const TitleWithOneButton: Story = {
  args: {
    isOpen: true,
    title: '제목',
    onSubmitButtonClick: () => {},
  },
};

export const TitleWithButtons: Story = {
  args: {
    isOpen: true,
    title: '제목',
    onCancelButtonClick: () => {},
    onSubmitButtonClick: () => {},
  },
};

export const CustomButtons: Story = {
  args: {
    isOpen: true,
    title: '제목',
    onCancelButtonClick: () => {},
    onSubmitButtonClick: () => {},
    cancelButtonLabel: '취소해주세요',
    submitButtonLabel: '등록해주세요',
  },
};

export const Big: Story = {
  render: function () {
    return (
      <PopupModal title="원생 선택" isOpen={true}>
        <div className="flex flex-col items-center justify-center w-full min-h-full">
          <p className="flex flex-col items-center justify-center h-96">
            자식으로 커스텀 컴포넌트를 만들 수 있습니다
          </p>
        </div>
      </PopupModal>
    );
  },
};

export const ShowModal: Story = {
  render: function () {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClose = () => {
      setIsOpen(false);
    };

    const handleModalSubmit = () => {
      setIsOpen(false);
      // 모달 제출 시 로직 처리
    };

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>모달 띄우기</button>
        <PopupModal
          title="원생 선택"
          isOpen={isOpen}
          onCancelButtonClick={handleModalClose}
          onSubmitButtonClick={handleModalSubmit}
        >
          <div className="flex flex-col items-center justify-center w-full min-h-full">
            <p className="flex flex-col items-center justify-center h-96">
              자식으로 커스텀 컴포넌트를 만들 수 있습니다
            </p>
          </div>
        </PopupModal>
      </div>
    );
  },
};
