import type {Meta, StoryObj} from '@storybook/react';
import Tag from '@/components/atoms/Tag/Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Small: Story = {
  args: {
    text: '출석',
    backgroundColor: '#AFAFAF',
    textColor: 'white',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: '발달 느림',
    backgroundColor: '#FFDFDF',
    textColor: 'black',
    size: 'large',
  },
};
