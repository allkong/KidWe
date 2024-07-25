import type {Meta, StoryObj} from '@storybook/react';
import NotificationButton from '@/components/atoms/Button/NotificationButton';

const meta: Meta<typeof NotificationButton> = {
  component: NotificationButton,
};

export default meta;

type Story = StoryObj<typeof NotificationButton>;
export const Default: Story = {};
