import type {Meta, StoryObj} from '@storybook/react';
import MoreButton from '@/components/atoms/Button/MoreButton';

const meta: Meta<typeof MoreButton> = {
  component: MoreButton,
};

export default meta;

type Story = StoryObj<typeof MoreButton>;
export const Default: Story = {};
