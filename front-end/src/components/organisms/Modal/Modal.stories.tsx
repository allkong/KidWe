import type {Meta, StoryObj} from '@storybook/react';
import Modal from '@/components/organisms/Modal/Modal';
import {useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: function () {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
      setIsOpen(true);
    };

    const handleModalClose = () => {
      setIsOpen(false);
    };

    return (
      <div>
        <button onClick={handleModalOpen}>open Modal</button>
        <Modal isOpen={isOpen}>
          <Modal.Header title="제목" />
          <Modal.Body>
            <div className="text-sm text-center text-gray-300">
              <p>게시글을 삭제할까요?</p>
              <p>삭제한 글은 복구할 수 없어요.</p>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="제출"
            onClick={handleModalClose}
            size="large"
          />
          <Modal.Background onClick={handleModalClose} />
        </Modal>
      </div>
    );
  },
};
