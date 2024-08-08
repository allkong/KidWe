import type {Meta, StoryObj} from '@storybook/react';
import TitleInput from '@/components/atoms/Input/TitleInput';

const meta: Meta<typeof TitleInput> = {
  component: TitleInput,
};
export default meta;

type Story = StoryObj<typeof TitleInput>;

export const Default: Story = {
  args: {
    placeholder: '제목 입력',
  },
};
