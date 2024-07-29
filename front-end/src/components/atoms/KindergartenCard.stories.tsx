import type {Meta, StoryObj} from '@storybook/react';
import KindergartenCard from '@/components/atoms/KindergartenCard';

const meta: Meta<typeof KindergartenCard> = {
  component: KindergartenCard,
};

export default meta;

type Story = StoryObj<typeof KindergartenCard>;

export const Default: Story = {
  args: {
    kindergartenName: '싸피 유치원',
  },
};
