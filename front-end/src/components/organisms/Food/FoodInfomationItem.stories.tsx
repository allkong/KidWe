import FoodInfomationItem from '@/components/organisms/Food/FoodInfomationItem';
import {Meta, StoryObj} from '@storybook/react/*';

const meta: Meta<typeof FoodInfomationItem> = {
  component: FoodInfomationItem,
};

export default meta;

type Story = StoryObj<typeof FoodInfomationItem>;

export const Lunch: Story = {
  args: {
    variant: 'lunch',
  },
};

export const Snack: Story = {
  args: {
    variant: 'snack',
  },
};

export const Dinner: Story = {
  args: {
    variant: 'dinner',
  },
};
