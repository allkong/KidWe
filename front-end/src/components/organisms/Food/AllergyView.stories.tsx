import type {Meta, StoryObj} from '@storybook/react';
import AllergyView from '@/components/organisms/Food/AllergyView';
import Modal from '@/components/organisms/Modal/Modal';
import {useState} from 'storybook/internal/preview-api';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';

const meta: Meta<typeof AllergyView> = {
  component: AllergyView,
};

export default meta;

type Story = StoryObj<typeof AllergyView>;

export const None: Story = {
  args: {},
};

export const InModal: Story = {
  render: function () {
    const [datas] = useState<{value: string; isChecked: boolean}[]>([
      {
        value: '달걀',
        isChecked: false,
      },
      {
        value: '우유',
        isChecked: false,
      },
      {
        value: '메밀',
        isChecked: false,
      },
      {
        value: '땅콩',
        isChecked: false,
      },
      {
        value: '대두',
        isChecked: false,
      },
      {
        value: '밀',
        isChecked: false,
      },
      {
        value: '고등어',
        isChecked: false,
      },
      {
        value: '게',
        isChecked: false,
      },
      {
        value: '돼지고기',
        isChecked: false,
      },
      {
        value: '새우',
        isChecked: false,
      },
      {
        value: '복숭아',
        isChecked: false,
      },
      {
        value: '토마토',
        isChecked: false,
      },
    ]);

    return (
      <Modal isOpen={true}>
        <Modal.Header title="알레르기 선택"></Modal.Header>
        <Modal.Body>
          <AllergyView
            render={() => {
              return (
                datas &&
                datas.map((data, idx) => (
                  <CheckBoxButton key={idx} label={data.value} />
                ))
              );
            }}
          />
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
          onClick={() =>
            window.alert(
              datas.map(
                data =>
                  `value: ${data.value} isChecked: ${data.isChecked ? 'true' : 'false'}\n`
              )
            )
          }
          variant="positive"
          size="large"
          round="full"
        />
        <Modal.Background></Modal.Background>
      </Modal>
    );
  },
};
