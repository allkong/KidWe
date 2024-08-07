import type {Meta, StoryObj} from '@storybook/react';
import DetailLabelItem from '@/components/molecules/Item/DetailLabelItem';

const meta: Meta<typeof DetailLabelItem> = {
  component: DetailLabelItem,
};

export default meta;

type Story = StoryObj<typeof DetailLabelItem>;

export const Default: Story = {
  args: {
    title: '증상',
    content: '감기, 발열',
    color: '#FFC36A',
  },
};
