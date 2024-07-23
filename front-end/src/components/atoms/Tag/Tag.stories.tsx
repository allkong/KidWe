import type {Meta, StoryObj} from '@storybook/react';
import Tag from '@/components/atoms/Tag/Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {},
};
