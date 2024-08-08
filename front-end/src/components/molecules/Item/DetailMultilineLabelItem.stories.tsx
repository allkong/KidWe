import type {Meta, StoryObj} from '@storybook/react';
import DetailMultilineLabelItem from '@/components/molecules/Item/DetailMultilineLabelItem';

const meta: Meta<typeof DetailMultilineLabelItem> = {
  component: DetailMultilineLabelItem,
};

export default meta;

type Story = StoryObj<typeof DetailMultilineLabelItem>;

export const Default: Story = {
  args: {
    title: '보호자',
    content: '어머니',
    contact: '010-0000-0000',
  },
};
