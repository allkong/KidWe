import type {Meta, StoryObj} from '@storybook/react';
import WriteButton from '@/components/atoms/Button/WriteButton';

const meta: Meta<typeof WriteButton> = {
  component: WriteButton,
};

export default meta;

type Story = StoryObj<typeof WriteButton>;

export const Default: Story = {
  args: {
    onClick: () => window.alert('안녕하세요'),
  },
};
