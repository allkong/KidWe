import type {Meta, StoryObj} from '@storybook/react';
import CloseButton from '@/components/atoms/Button/CloseButton';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
};

export default meta;

type Story = StoryObj<typeof CloseButton>;
export const Default: Story = {};
