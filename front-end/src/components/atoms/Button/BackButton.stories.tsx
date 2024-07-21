import type {Meta, StoryObj} from '@storybook/react';
import BackButton from '@/components/atoms/Button/BackButton';

const meta: Meta<typeof BackButton> = {
  component: BackButton,
};

export default meta;

type Story = StoryObj<typeof BackButton>;
export const Default: Story = {};
