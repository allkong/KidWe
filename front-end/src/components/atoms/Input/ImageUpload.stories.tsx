import type {Meta, StoryObj} from '@storybook/react';
import ImageUpload from '@/components/atoms/Input/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  component: ImageUpload,
};
export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {};
