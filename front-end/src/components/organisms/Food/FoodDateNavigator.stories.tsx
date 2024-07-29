import {Meta, StoryObj} from '@storybook/react/*';
import FoodDateNavigator from '@/components/organisms/Food/FoodDateNavigator';

const meta: Meta<typeof FoodDateNavigator> = {
  component: FoodDateNavigator,
};

export default meta;

type Story = StoryObj<typeof FoodDateNavigator>;

export const Lunch: Story = {
  args: {},
};
