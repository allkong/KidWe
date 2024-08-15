import type {Meta, StoryObj} from '@storybook/react';
import ProfileImage from '@/components/atoms/Image/ProfileImage';

const meta: Meta<typeof ProfileImage> = {
  component: ProfileImage,
};

export default meta;

type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2024/07/10/15/21/ai-generated-8886126_1280.png',
  },
};
