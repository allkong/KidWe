import type {Meta, StoryObj} from '@storybook/react';
import ConsentSection from '@/components/organisms/Signature/ConsentSection';

const meta: Meta<typeof ConsentSection> = {
  component: ConsentSection,
};

export default meta;

type Story = StoryObj<typeof ConsentSection>;
export const Default: Story = {
  args: {
    text: '금일 자녀의 투약을 선생님께 의뢰합니다.',
    date: '2024년 7월 17일',
    parentName: '김부모',
  },
};
