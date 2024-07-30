import type {Meta, StoryObj} from '@storybook/react';
import MemoView from '@/components/organisms/Memo/MemoView';
import Modal from '@/components/organisms/Modal/Modal';

const meta: Meta<typeof MemoView> = {
  component: MemoView,
};

export default meta;

type Story = StoryObj<typeof MemoView>;

export const None: Story = {
  args: {
    time: '7월 16일(화) 오전 10:12',
    children: ['강혁준', '백승우'],
    tags: ['밥', '술', '햄버거', '배고파', '점심'],
    content:
      '글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용',
  },
};

export const InModal: Story = {
  render: function () {
    const time = '7월 16일(화) 오전 10:12';
    const children = ['강혁준', '백승우'];
    const tags = ['밥', '술', '햄버거', '배고파', '점심'];
    const content =
      '글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용';

    const props = {time, children, tags, content};

    return (
      <Modal isOpen={true}>
        <Modal.Header title="관찰 메모"></Modal.Header>
        <Modal.Body>
          <MemoView {...props} />
        </Modal.Body>
        <Modal.BottomButton
          label="수정"
          onClick={() => {}}
          variant="negative"
          size="large"
          round="full"
        />
        <Modal.BottomButton
          label="확인"
          onClick={() => {}}
          variant="positive"
          size="large"
          round="full"
        />
        <Modal.Background></Modal.Background>
      </Modal>
    );
  },
};
