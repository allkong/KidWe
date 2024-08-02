import FoodInfoWriteItem from '@/components/organisms/Food/FoodInfoWriteItem';
import {Meta, StoryObj} from '@storybook/react/*';

const meta: Meta<typeof FoodInfoWriteItem> = {
  component: FoodInfoWriteItem,
};

export default meta;

type Story = StoryObj<typeof FoodInfoWriteItem>;

export const NoAllergies: Story = {
  args: {
    label: '중식',
  },
};

export const WithAllergies: Story = {
  args: {
    label: '중식',
    allergies: [
      'asdasd',
      'sadasd',
      'saddddddddddasdasdasdad',
      'saddddddddddasdasdasdad',
      'saddddddddddasdasdasdad',
      'sadasdasdsadas',
    ],
  },
};
