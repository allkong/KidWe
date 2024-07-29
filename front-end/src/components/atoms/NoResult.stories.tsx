import type {Meta, StoryObj} from '@storybook/react';
import NoResult from './NoResult';

const meta: Meta<typeof NoResult> = {
  component: NoResult,
};

export default meta;

type Story = StoryObj<typeof NoResult>;

export const Default: Story = {
  args: {
    text: '등록된 반이 없어요',
  },
};
