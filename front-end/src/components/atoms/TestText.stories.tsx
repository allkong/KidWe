import type {Meta, StoryObj} from '@storybook/react';

import TestText from '@/components/atoms/TestText';

const meta: Meta<typeof TestText> = {
  component: TestText,
};
export default meta;

type Story = StoryObj<typeof TestText>;

export const Basic: Story = {
  args: {
    text: 'basic',
  },
};

export const Primary: Story = {
  args: {
    text: 'primary',
  },
};
