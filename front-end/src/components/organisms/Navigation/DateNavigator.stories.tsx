import type {Meta, StoryObj} from '@storybook/react';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';

const meta: Meta<typeof DateNavigator> = {
  component: DateNavigator,
};

export default meta;

type Story = StoryObj<typeof DateNavigator>;
export const Default: Story = {};
